# Convert all HEICs in current folder to WebP
for img in *.HEIC; do
    magick "$img" -quality 90 -define webp:method=6 "${img%.HEIC}.webp"
done