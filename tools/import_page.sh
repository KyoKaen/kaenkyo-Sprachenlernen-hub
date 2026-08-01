#!/usr/bin/env bash
#
# import_page.sh - Import a classified book photo into the print archive.
#
# Once a raw photo has been identified as "chapter N, book page P", this
# copies it into print/chapter/cN/ using the canonical name cN_pP.jpg so the
# chapter module can reference a stable path.
#
# Photos are downscaled and re-encoded as JPEG: a 12 MP phone photo becomes a
# ~700 KB file that is still fully legible, instead of a ~20 MB PNG that would
# bloat the Git repository and GitHub Pages.
#
# Language-agnostic: pass a different --root for another book project.
#
# Usage:
#   tools/import_page.sh <source-photo> <chapter-no> <page-no> \
#       [--root DIR] [--force] [--max-dim PX] [--quality N] [--format jpeg|png]
#
# Example:
#   tools/import_page.sh ~/Downloads/chapters/IMG_1511.HEIC 40 98
#
set -euo pipefail

SRC=""
CHAPTER=""
PAGE=""
ROOT="print/chapter"
FORCE=0
MAX_DIM=2000
QUALITY=85
FORMAT="jpeg"

usage() {
    echo "usage: $0 <source-photo> <chapter-no> <page-no> [--root DIR] [--force] [--max-dim PX] [--quality N] [--format jpeg|png]"
}

while [ $# -gt 0 ]; do
    case "$1" in
        --root) ROOT="$2"; shift 2 ;;
        --force) FORCE=1; shift ;;
        --max-dim) MAX_DIM="$2"; shift 2 ;;
        --quality) QUALITY="$2"; shift 2 ;;
        --format) FORMAT="$2"; shift 2 ;;
        -h|--help) usage; exit 0 ;;
        *)
            if   [ -z "$SRC" ];     then SRC="$1"
            elif [ -z "$CHAPTER" ]; then CHAPTER="$1"
            elif [ -z "$PAGE" ];    then PAGE="$1"
            else echo "error: unexpected argument '$1'" >&2; exit 2
            fi
            shift ;;
    esac
done

if [ -z "$SRC" ] || [ -z "$CHAPTER" ] || [ -z "$PAGE" ]; then
    usage >&2
    exit 2
fi

if [ ! -f "$SRC" ]; then
    echo "error: source photo not found: $SRC" >&2
    exit 1
fi

case "$FORMAT" in
    jpeg) EXT="jpg" ;;
    png)  EXT="png" ;;
    *) echo "error: --format must be jpeg or png" >&2; exit 2 ;;
esac

DEST_DIR="$ROOT/c$CHAPTER"
DEST="$DEST_DIR/c${CHAPTER}_p${PAGE}.${EXT}"

mkdir -p "$DEST_DIR"

if [ -f "$DEST" ] && [ "$FORCE" -ne 1 ]; then
    echo "skip: $DEST already exists (use --force to overwrite)"
    exit 0
fi

# sips reads HEIC/JPEG/PNG; -Z bounds the longest edge, preserving aspect ratio.
if [ "$FORMAT" = "jpeg" ]; then
    sips -s format jpeg -s formatOptions "$QUALITY" -Z "$MAX_DIM" "$SRC" --out "$DEST" >/dev/null
else
    sips -s format png -Z "$MAX_DIM" "$SRC" --out "$DEST" >/dev/null
fi

echo "imported: $SRC -> $DEST ($(du -h "$DEST" | cut -f1))"
