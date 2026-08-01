#!/usr/bin/env python3
"""Audit digital-book coverage and emit a status table.

Cross-references three sources of truth:

1. ``app.js``            - the page -> chapter routing map (which pages the app knows)
2. ``chapters/*.js``     - the chapter modules (which pages are actually rendered)
3. ``print/chapter/c*/`` - the scan archive (photos + hand-typed ``.md`` transcripts)

For every chapter it reports whether the module exists, which routed pages are
still missing from it, and which supporting source material is available. The
result tells you exactly what to work on next and what still needs a photo or a
transcript from the user.

Language-agnostic: point ``--root`` at any book project with the same layout.

Usage:
    tools/audit_coverage.py [--root DIR] [--format table|csv|markdown] [--only-gaps]
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path

# "74": "chapter30",
ROUTE_RE = re.compile(r'"([\w-]+)"\s*:\s*"([\w.-]+)"')
# Page keys inside a chapter module's `pages: { ... }` object.
PAGE_KEY_RE = re.compile(r'^\s*"([\w-]+)"\s*:\s*`', re.MULTILINE)
EXPORT_RE = re.compile(r'export\s+const\s+([\w$]+)\s*=')
WINDOW_RE = re.compile(r'window\[?["\']?([\w$-]+)["\']?\]?\s*=')
IMAGE_SUFFIXES = {".png", ".jpg", ".jpeg", ".heic", ".webp"}


@dataclass
class ChapterStatus:
    """Everything known about one chapter of the book."""

    name: str
    number: int | None
    routed_pages: list[str] = field(default_factory=list)
    module_pages: list[str] = field(default_factory=list)
    module_path: Path | None = None
    export_style: str = "-"
    print_images: list[str] = field(default_factory=list)
    transcript_bytes: int = -1

    @property
    def missing_pages(self) -> list[str]:
        return [p for p in self.routed_pages if p not in self.module_pages]

    @property
    def extra_pages(self) -> list[str]:
        return [p for p in self.module_pages if p not in self.routed_pages]

    @property
    def has_module(self) -> bool:
        return self.module_path is not None

    @property
    def has_transcript(self) -> bool:
        return self.transcript_bytes > 0

    @property
    def has_images(self) -> bool:
        return bool(self.print_images)

    @property
    def has_source(self) -> bool:
        return self.has_transcript or self.has_images

    @property
    def status(self) -> str:
        """Coarse workflow state, ordered from "nothing" to "done"."""
        if not self.has_module:
            return "MISSING_JS" if self.has_source else "NEEDS_SOURCE"
        if self.missing_pages:
            return "PARTIAL_JS"
        return "JS_COMPLETE"

    @property
    def next_action(self) -> str:
        if self.status == "NEEDS_SOURCE":
            return "add photo or .md transcript"
        if self.status == "MISSING_JS":
            return "build chapter module"
        if self.status == "PARTIAL_JS":
            missing = ",".join(self.missing_pages)
            return f"add page(s) {missing}" if self.has_source else f"need source for page(s) {missing}"
        return "verify in browser"


def parse_routes(app_js: Path) -> dict[str, str]:
    """Return ``{page_key: chapter_module_name}`` from the app routing map."""
    if not app_js.is_file():
        return {}
    text = app_js.read_text(encoding="utf-8")
    start = text.find("pageToChapterMap")
    if start == -1:
        return {}
    end = text.find("\n};", start)
    body = text[start : end if end != -1 else len(text)]
    return {page: chapter for page, chapter in ROUTE_RE.findall(body)}


def parse_module(path: Path) -> tuple[list[str], str]:
    """Return the page keys a chapter module defines and how it is exported."""
    text = path.read_text(encoding="utf-8")
    pages = PAGE_KEY_RE.findall(text)

    if EXPORT_RE.search(text):
        style = "esm"
    elif WINDOW_RE.search(text):
        style = "global"
    else:
        style = "unknown"
    return pages, style


def chapter_number(name: str) -> int | None:
    match = re.search(r"(\d+)", name)
    return int(match.group(1)) if match else None


def collect(root: Path, max_chapter: int) -> list[ChapterStatus]:
    routes = parse_routes(root / "app.js")

    chapters: dict[str, ChapterStatus] = {}

    def bucket(name: str) -> ChapterStatus:
        if name not in chapters:
            chapters[name] = ChapterStatus(name=name, number=chapter_number(name))
        return chapters[name]

    for page, chapter in routes.items():
        bucket(chapter).routed_pages.append(page)

    for module in sorted((root / "chapters").glob("*.js")):
        entry = bucket(module.stem)
        entry.module_path = module
        entry.module_pages, entry.export_style = parse_module(module)

    # Chapters that exist in the printed book but are not wired up anywhere yet
    # still deserve a row, otherwise gaps stay invisible.
    for number in range(1, max_chapter + 1):
        bucket(f"chapter{number}")

    print_root = root / "print" / "chapter"
    for entry in chapters.values():
        if entry.number is None:
            continue
        folder = print_root / f"c{entry.number}"
        if not folder.is_dir():
            continue
        entry.print_images = sorted(
            f.name for f in folder.iterdir() if f.suffix.lower() in IMAGE_SUFFIXES
        )
        transcript = folder / f"c{entry.number}.md"
        if transcript.is_file():
            entry.transcript_bytes = transcript.stat().st_size

    def sort_key(entry: ChapterStatus) -> tuple[int, int, str]:
        first_page = min((int(p) for p in entry.routed_pages if p.isdigit()), default=10**6)
        return (first_page, entry.number if entry.number is not None else 10**6, entry.name)

    return sorted(chapters.values(), key=sort_key)


def rows(entries: list[ChapterStatus]) -> list[list[str]]:
    out = []
    for e in entries:
        out.append(
            [
                e.name,
                ",".join(sorted(e.routed_pages, key=lambda p: (len(p), p))) or "-",
                "yes" if e.has_module else "no",
                e.export_style if e.has_module else "-",
                ",".join(sorted(e.module_pages, key=lambda p: (len(p), p))) or "-",
                ",".join(e.missing_pages) or "-",
                f"{len(e.print_images)}",
                "yes" if e.has_transcript else "no",
                e.status,
                e.next_action,
            ]
        )
    return out


HEADERS = [
    "chapter",
    "routed_pages",
    "js",
    "export",
    "js_pages",
    "missing_pages",
    "imgs",
    "md",
    "status",
    "next_action",
]


def render_table(data: list[list[str]]) -> str:
    widths = [max(len(HEADERS[i]), *(len(r[i]) for r in data)) if data else len(HEADERS[i])
              for i in range(len(HEADERS))]
    lines = [
        "  ".join(h.ljust(widths[i]) for i, h in enumerate(HEADERS)),
        "  ".join("-" * widths[i] for i in range(len(HEADERS))),
    ]
    lines += ["  ".join(cell.ljust(widths[i]) for i, cell in enumerate(row)) for row in data]
    return "\n".join(lines)


def render_markdown(data: list[list[str]]) -> str:
    lines = ["| " + " | ".join(HEADERS) + " |",
             "|" + "|".join("---" for _ in HEADERS) + "|"]
    lines += ["| " + " | ".join(row) + " |" for row in data]
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,
                                     formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--root", default=".", help="project root (default: current dir)")
    parser.add_argument("--format", choices=["table", "csv", "markdown"], default="table")
    parser.add_argument("--only-gaps", action="store_true",
                        help="hide chapters that are already complete")
    parser.add_argument("--max-chapter", type=int, default=85,
                        help="highest chapter number in the book (default: 85)")
    args = parser.parse_args()

    root = Path(args.root).expanduser().resolve()
    if not (root / "chapters").is_dir():
        print(f"error: no chapters/ directory under {root}", file=sys.stderr)
        return 1

    entries = collect(root, args.max_chapter)
    if args.only_gaps:
        entries = [e for e in entries if e.status != "JS_COMPLETE"]

    data = rows(entries)

    if args.format == "csv":
        writer = csv.writer(sys.stdout)
        writer.writerow(HEADERS)
        writer.writerows(data)
    elif args.format == "markdown":
        print(render_markdown(data))
    else:
        print(render_table(data))

    counts: dict[str, int] = {}
    for e in entries:
        counts[e.status] = counts.get(e.status, 0) + 1
    summary = "  ".join(f"{k}={v}" for k, v in sorted(counts.items()))
    print(f"\ntotal={len(entries)}  {summary}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
