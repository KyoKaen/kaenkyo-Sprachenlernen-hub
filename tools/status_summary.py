#!/usr/bin/env python3
"""Emit the actionable "what to supply next" section of STATUS.md.

Reads the coverage audit and splits the chapters that still need source
material into those already routed in ``app.js`` (buildable as soon as a photo
exists) and those that additionally need a ``pageToChapterMap`` entry.
"""

from __future__ import annotations

import argparse
import csv
import io
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def load_rows(root: str) -> list[dict[str, str]]:
    proc = subprocess.run(
        [sys.executable, os.path.join(HERE, "audit_coverage.py"), "--root", root, "--format", "csv"],
        capture_output=True,
        text=True,
        check=True,
    )
    text = proc.stdout
    if text.startswith("total="):
        text = text.split("\n", 1)[1]
    return list(csv.DictReader(io.StringIO(text)))


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--root", default=".", help="repository root")
    args = ap.parse_args()

    rows = load_rows(args.root)
    need = [r for r in rows if r["status"] in ("NEEDS_SOURCE", "MISSING_JS", "PARTIAL_JS")]
    routed = [r for r in need if r["routed_pages"] != "-"]
    unrouted = [r for r in need if r["routed_pages"] == "-"]

    print("## What to supply next\n")
    print(
        f"**{len(need)} chapters still need work.** "
        "For `NEEDS_SOURCE` entries, add a photo to `print/chapter/cN/` "
        "(via `tools/import_page.sh`) and/or fill `print/chapter/cN/cN.md`.\n"
    )

    print("### A. Routed in `app.js` - buildable as soon as source exists\n")
    print("| chapter | book pages | imgs | md | status |")
    print("|---|---|---|---|---|")
    for r in routed:
        print(f"| {r['chapter']} | {r['routed_pages']} | {r['imgs']} | {r['md']} | {r['status']} |")

    print("\n### B. Not yet routed in `app.js`\n")
    print(
        "These have a TOC entry in `deutsch_learning_app.html` but no "
        "`pageToChapterMap` route yet, so a route must be added to `app.js` "
        "when the module is built.\n"
    )
    print("`" + ", ".join(r["chapter"] for r in unrouted) + "`\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
