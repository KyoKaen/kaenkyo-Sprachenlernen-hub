#!/usr/bin/env python3
"""Validate chapter modules of a Sprachenlernen-hub style book app.

Checks, for every ``chapters/*.js`` module:

1.  it parses as an ES module (via macOS JavaScriptCore ``jsc``, or ``node``),
2.  it exports an object with a ``pages`` map (ESM named export or a
    ``window[...]`` global assignment),
3.  every page key it declares is routed in ``app.js``,
4.  every page routed to it in ``app.js`` actually exists in the module,
5.  every page fragment is non-empty and has balanced HTML tags.

Usage:
    python3 tools/validate_chapters.py --root .
    python3 tools/validate_chapters.py --root . --only-problems
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from html.parser import HTMLParser

JSC_PATH = "/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc"

ROUTE_RE = re.compile(r'["\'](\S+?)["\']\s*:\s*["\'](chapter[\w.-]+)["\']')


def find_engine() -> tuple[str, str]:
    """Return (kind, path) for an available JS engine."""
    if os.path.exists(JSC_PATH):
        return ("jsc", JSC_PATH)
    node = shutil.which("node")
    if node:
        return ("node", node)
    raise SystemExit(
        "No JS engine found. Install Node.js or run on macOS (JavaScriptCore)."
    )


def read_routes(app_js: str) -> dict[str, str]:
    """Parse the pageToChapterMap literal out of app.js."""
    src = open(app_js, encoding="utf-8").read()
    start = src.find("pageToChapterMap")
    if start == -1:
        return {}
    brace = src.find("{", start)
    depth, end = 0, brace
    for i in range(brace, len(src)):
        if src[i] == "{":
            depth += 1
        elif src[i] == "}":
            depth -= 1
            if depth == 0:
                end = i
                break
    return {p: c for p, c in ROUTE_RE.findall(src[brace : end + 1])}


# Chapter modules come in two flavours: ESM (`export const chapterN`) and legacy
# browser globals (`window.chapterN = ...`). A dynamic import lets the browser
# shim below run before the module body, so both flavours can be inspected.
DRIVER = """
globalThis.window = globalThis;
globalThis.document = {{
    getElementById: function () {{ return null; }},
    querySelector: function () {{ return null; }},
    querySelectorAll: function () {{ return []; }},
    addEventListener: function () {{}},
    createElement: function () {{ return {{ style: {{}}, appendChild: function () {{}} }}; }}
}};
globalThis.navigator = globalThis.navigator || {{ userAgent: 'validate_chapters' }};

var before = new Set(Object.keys(globalThis));
import('./{rel}').then(function (mod) {{
    var out = {{}};
    var names = Object.keys(mod);
    Object.keys(globalThis).forEach(function (k) {{
        if (!before.has(k) && names.indexOf(k) === -1) names.push(k);
    }});
    names.forEach(function (n) {{
        var o = mod[n] !== undefined ? mod[n] : globalThis[n];
        if (o && typeof o === 'object' && o.pages) {{
            var pages = {{}};
            Object.keys(o.pages).forEach(function (p) {{ pages[p] = String(o.pages[p]); }});
            out[n] = {{ title: o.title || '', level: o.level || '', pages: pages }};
        }}
    }});
    {emit}(JSON.stringify(out));
}}, function (e) {{
    {emit}('__ERROR__' + (e && e.stack ? e.stack : e));
}});
"""


def inspect(engine: tuple[str, str], root: str, rel_path: str) -> tuple[dict, str]:
    kind, exe = engine
    emit = "print" if kind == "jsc" else "console.log"
    code = DRIVER.format(rel=rel_path, emit=emit)
    suffix = ".js" if kind == "jsc" else ".mjs"
    fd, tmp = tempfile.mkstemp(suffix=suffix, dir=root, prefix="_validate_")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as fh:
            fh.write(code)
        cmd = [exe, "-m", os.path.basename(tmp)] if kind == "jsc" else [exe, os.path.basename(tmp)]
        proc = subprocess.run(cmd, cwd=root, capture_output=True, text=True, timeout=60)
    finally:
        os.unlink(tmp)

    combined = (proc.stdout + proc.stderr).strip()
    if proc.returncode != 0:
        return {}, combined.splitlines()[-1] if combined else "unknown error"

    lines = [ln for ln in proc.stdout.strip().splitlines() if ln.strip()]
    if not lines:
        return {}, "no output from engine"
    last = lines[-1]
    if last.startswith("__ERROR__"):
        return {}, last[len("__ERROR__") :].splitlines()[0]
    try:
        return json.loads(last), ""
    except ValueError:
        return {}, "no JSON output: " + last[:120]


VOID_TAGS = {
    "area", "base", "br", "col", "embed", "hr", "img", "input",
    "link", "meta", "param", "source", "track", "wbr",
}


class BalanceChecker(HTMLParser):
    """Detects unclosed / mismatched tags in a rendered page fragment."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stack: list[str] = []
        self.errors: list[str] = []

    def handle_starttag(self, tag: str, attrs) -> None:
        if tag not in VOID_TAGS:
            self.stack.append(tag)

    def handle_startendtag(self, tag: str, attrs) -> None:
        pass

    def handle_endtag(self, tag: str) -> None:
        if tag in VOID_TAGS:
            return
        if tag not in self.stack:
            self.errors.append(f"stray </{tag}>")
            return
        while self.stack:
            open_tag = self.stack.pop()
            if open_tag == tag:
                break
            self.errors.append(f"unclosed <{open_tag}>")

    def finish(self) -> list[str]:
        self.close()
        self.errors.extend(f"unclosed <{t}>" for t in reversed(self.stack))
        return self.errors


def check_html(fragment: str) -> list[str]:
    checker = BalanceChecker()
    try:
        checker.feed(fragment)
    except Exception as exc:  # noqa: BLE001 - parser can raise on malformed markup
        return [f"parse error: {exc}"]
    return checker.finish()


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--root", default=".", help="repository root")
    ap.add_argument("--only-problems", action="store_true", help="hide modules that are fully OK")
    args = ap.parse_args()

    root = os.path.abspath(args.root)
    chapters_dir = os.path.join(root, "chapters")
    app_js = os.path.join(root, "app.js")
    if not os.path.isdir(chapters_dir):
        raise SystemExit(f"no chapters/ directory under {root}")

    routes = read_routes(app_js) if os.path.exists(app_js) else {}
    routes_by_chapter: dict[str, list[str]] = {}
    for page, chap in routes.items():
        routes_by_chapter.setdefault(chap, []).append(page)

    engine = find_engine()
    files = sorted(
        (f for f in os.listdir(chapters_dir) if f.endswith(".js")),
        key=lambda f: (int(m.group(1)) if (m := re.search(r"(\d+)", f)) else 0, f),
    )

    rows, problems = [], 0
    for fname in files:
        mods, err = inspect(engine, root, f"chapters/{fname}")
        base = os.path.splitext(fname)[0]
        if err:
            rows.append((fname, "PARSE_ERROR", "", err[:80]))
            problems += 1
            continue
        if not mods:
            rows.append((fname, "NO_EXPORT", "", "no object with a .pages map"))
            problems += 1
            continue

        for name, info in mods.items():
            declared = set(info["pages"])
            routed = set(routes_by_chapter.get(name, []) or routes_by_chapter.get(base, []))
            notes = []
            if missing := sorted(routed - declared, key=lambda x: (len(x), x)):
                notes.append("routed but absent: " + ",".join(missing))
            if extra := sorted(declared - routed, key=lambda x: (len(x), x)):
                notes.append("declared but unrouted: " + ",".join(extra))
            status = "OK" if not notes else "PAGE_MISMATCH"

            for page in sorted(declared, key=lambda x: (len(x), x)):
                html = info["pages"][page]
                if not html.strip():
                    notes.append(f"page {page}: empty")
                    status = "EMPTY_PAGE"
                    continue
                if html_errors := check_html(html):
                    seen = list(dict.fromkeys(html_errors))[:3]
                    notes.append(f"page {page}: " + ", ".join(seen))
                    status = "BAD_HTML"

            if status != "OK":
                problems += 1
            if status == "OK" and args.only_problems:
                continue
            rows.append((fname, status, ",".join(sorted(declared, key=lambda x: (len(x), x))), "; ".join(notes)))

    w = [max(len(str(r[i])) for r in rows + [("file", "status", "pages", "notes")]) for i in range(4)]
    header = ("file", "status", "pages", "notes")
    print("  ".join(h.ljust(w[i]) for i, h in enumerate(header)))
    print("  ".join("-" * w[i] for i in range(4)))
    for r in rows:
        print("  ".join(str(r[i]).ljust(w[i]) for i in range(4)))
    print(f"\n{len(files)} module(s) checked, {problems} problem(s) found.")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
