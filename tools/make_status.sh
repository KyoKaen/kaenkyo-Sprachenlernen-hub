#!/usr/bin/env bash
#
# make_status.sh - Regenerate STATUS.md, the chapter build tracking table.
#
# Combines the coverage audit (which chapters have JS / photos / transcripts)
# with a hand-written legend and an actionable "what to supply next" summary.
#
# Usage:
#   tools/make_status.sh [--root DIR] [--out FILE]
#
set -euo pipefail

ROOT="."
OUT=""

while [ $# -gt 0 ]; do
    case "$1" in
        --root) ROOT="$2"; shift 2 ;;
        --out) OUT="$2"; shift 2 ;;
        -h|--help) echo "usage: $0 [--root DIR] [--out FILE]"; exit 0 ;;
        *) echo "error: unexpected argument '$1'" >&2; exit 2 ;;
    esac
done

cd "$ROOT"
OUT="${OUT:-STATUS.md}"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

{
cat <<'HEADER'
# Kapitel-Status / Chapter Build Status

Auto-generated tracking table for the digital edition of *Grammatik aktiv A1-B1*.

**Regenerate with:**

```bash
tools/make_status.sh                          # rewrites this file
python3 tools/validate_chapters.py --root .   # parse + routing + HTML + no-image checks
```

## Conventions for `chapters/chapterN.js`

1. **No images.** A chapter module contains only well-formatted HTML content -
   grammar tables, tip boxes and fillable exercises. Page scans stay in
   `print/chapter/cN/` as *reference material only* and are never embedded.
   `tools/validate_chapters.py` reports `HAS_IMAGE` if this is violated.
2. **Shared design.** Reuse the existing classes so every chapter looks the
   same: `page-render-container`, `page-header-meta`, `page-title-main`,
   `grid-syntax-table` + `grid-cell` / `grid-header`, `exercise-headline`,
   `tip-box-lightbulb`, `options-bank-box`, `inline-blank`,
   `full-width-blank`, `page-navigation-footer` + `nav-btn`. Colours come from
   the CSS variables `--brand-plum`, `--exercise-blue`, `--brand-orange`,
   `--text-muted`.
3. **Blank exercises.** The `cN.md` transcripts contain hand-written practice
   answers. Strip them back to empty inputs when building the module.
4. **Export shape.**
   `export const chapterN = { title, level, pages: { "<page>": "<html>" } };`
   Page keys must match the `pageToChapterMap` entries in `app.js`.

## Legend

| status | meaning | what you need to do |
|---|---|---|
| `JS_COMPLETE` | `chapters/chapterN.js` exists and defines every page routed in `app.js` | nothing - verify in the browser |
| `PARTIAL_JS` | module exists but is missing some routed pages | add the missing page(s) to the module |
| `MISSING_JS` | source material exists (photo and/or `.md`) but no module yet | build `chapters/chapterN.js` |
| `NEEDS_SOURCE` | no photo and no transcript | **you** add a photo to `print/chapter/cN/` and/or fill `print/chapter/cN/cN.md` |

Columns: `imgs` = page scans in `print/chapter/cN/`, `md` = non-empty transcript.

HEADER

python3 "$HERE/status_summary.py" --root .

cat <<'MID'
## Cover & Inhalt

| item | status | note |
|---|---|---|
| Cover | DONE | static markup in `deutsch_learning_app.html` (`.book-cover`); scan at `print/cover/cover.jpg` |
| Inhalt (ch. 1-34) | DONE | scan at `print/inhalt/inhalt_p1.jpg`; TOC markup complete |
| Inhalt (ch. 35-67) | DONE | scan at `print/inhalt/inhalt_p2.jpg`; TOC markup complete |
| Inhalt (ch. 68-85 + Anhang) | TOC OK / SCAN MISSING | TOC markup already covers these; photo of the printed Inhalt still to be supplied |

## Per-chapter status

MID

python3 "$HERE/audit_coverage.py" --root . --format markdown
} > "$OUT"

echo "wrote $OUT ($(wc -l < "$OUT" | tr -d ' ') lines)"
