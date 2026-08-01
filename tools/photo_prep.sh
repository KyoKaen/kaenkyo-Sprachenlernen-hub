#!/usr/bin/env bash
#
# photo_prep.sh - Prepare raw book photos for classification.
#
# Converts HEIC/JPG/PNG source photos into downscaled JPEG previews that are
# small enough to inspect quickly, and reports byte-identical duplicates so
# the same book page is not imported twice.
#
# Language-agnostic: works for any book digitisation project (German,
# Luxembourgish, ...). Only paths change.
#
# Usage:
#   tools/photo_prep.sh <source-dir> <preview-dir> [max-pixels]
#
# Example:
#   tools/photo_prep.sh ~/Downloads/chapters .work/preview 1400
#
set -euo pipefail

SRC="${1:-}"
OUT="${2:-}"
MAXPX="${3:-1400}"

if [ -z "$SRC" ] || [ -z "$OUT" ]; then
    echo "usage: $0 <source-dir> <preview-dir> [max-pixels]" >&2
    exit 2
fi

if [ ! -d "$SRC" ]; then
    echo "error: source dir not found: $SRC" >&2
    exit 1
fi

mkdir -p "$OUT"

echo "== duplicate scan =="
python3 - "$SRC" <<'PY'
import hashlib, pathlib, sys, collections

src = pathlib.Path(sys.argv[1])
seen = collections.defaultdict(list)
exts = {".heic", ".jpg", ".jpeg", ".png"}

for path in sorted(src.iterdir()):
    if not path.is_file() or path.suffix.lower() not in exts:
        continue
    digest = hashlib.md5(path.read_bytes()).hexdigest()
    seen[digest].append(path.name)

dupes = {d: names for d, names in seen.items() if len(names) > 1}
if not dupes:
    print("no byte-identical duplicates")
for names in dupes.values():
    keep, *drop = names
    print(f"duplicate: keep '{keep}' -> skip {drop}")
PY

echo
echo "== preview conversion =="
converted=0
skipped=0

# Track hashes so identical files are converted only once.
declare -a seen_hashes=()

while IFS= read -r -d '' file; do
    hash=$(md5 -q "$file")
    already=0
    for h in "${seen_hashes[@]:-}"; do
        if [ "$h" = "$hash" ]; then already=1; break; fi
    done
    if [ "$already" -eq 1 ]; then
        skipped=$((skipped + 1))
        continue
    fi
    seen_hashes+=("$hash")

    base=$(basename "$file")
    stem="${base%.*}"
    target="$OUT/${stem}.jpg"

    if sips -s format jpeg -Z "$MAXPX" "$file" --out "$target" >/dev/null 2>&1; then
        converted=$((converted + 1))
    else
        echo "warn: could not convert $base" >&2
    fi
done < <(find "$SRC" -maxdepth 1 -type f \
    \( -iname '*.heic' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 | sort -z)

echo "converted=$converted duplicates_skipped=$skipped"
echo "previews in: $OUT"
