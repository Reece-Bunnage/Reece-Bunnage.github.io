#!/bin/bash
# Resize + JPEG-encode any oversized image under public/images/.
# Screenshots come off a Retina display at 3-5MB; this gets them to ~100-300KB.
# Safe to re-run: files already small enough are skipped.
set -e
cd "$(dirname "$0")/.."

MAX_KB=400
WIDTH=1400
changed=0

while IFS= read -r f; do
  kb=$(( $(stat -f%z "$f") / 1024 ))
  [ "$kb" -le "$MAX_KB" ] && continue

  out="${f%.*}.jpg"
  sips -Z "$WIDTH" -s format jpeg -s formatOptions 78 "$f" --out "$out.tmp" >/dev/null 2>&1
  mv "$out.tmp" "$out"
  [ "$f" != "$out" ] && rm "$f"

  newkb=$(( $(stat -f%z "$out") / 1024 ))
  printf '  %-46s %5sKB -> %4sKB\n' "${out#public/}" "$kb" "$newkb"
  changed=$((changed + 1))
done < <(find public/images -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.heic' \))

if [ "$changed" -eq 0 ]; then
  echo "  Nothing to optimize — every image is already under ${MAX_KB}KB."
else
  echo ""
  echo "  Optimized $changed file(s)."
  echo "  If any filename changed extension, update its path in src/data/projects.js."
fi
