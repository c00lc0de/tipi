# Convert all PNGs in current folder to WebP
for img in *.png; do
    magick "$img" -quality 90 -define webp:method=6 "${img%.png}.webp"
done