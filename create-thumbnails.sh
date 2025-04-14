#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick is not installed. Please install it first."
    echo "On macOS: brew install imagemagick"
    echo "On Ubuntu/Debian: sudo apt-get install imagemagick"
    exit 1
fi

# Create thumbnail from video
if [ ! -f "assets/maria_video_tiny.jpg" ]; then
    echo "Creating video thumbnail..."
    ffmpeg -i assets/maria_dumitrescu.mp4 -ss 00:00:01 -vframes 1 -filter:v scale=20:-1 -quality 5 assets/maria_video_tiny.jpg
fi

# Create image thumbnails
echo "Creating image thumbnails..."

# Stylique
if [ ! -f "assets/stylique_rock-tiny.jpg" ]; then
    convert assets/stylique_rock.png -resize 20x -quality 5 assets/stylique_rock-tiny.jpg
fi

# Lotus
if [ ! -f "assets/lotus/lotus_profile_pic-tiny.jpg" ]; then
    mkdir -p assets/lotus
    convert assets/lotus/lotus_profile_pic.svg -resize 20x -quality 5 assets/lotus/lotus_profile_pic-tiny.jpg
fi

# Gist
if [ ! -f "assets/girst_mockup-tiny.jpg" ]; then
    convert assets/girst_mockup.png -resize 20x -quality 5 assets/girst_mockup-tiny.jpg
fi

# StudyPaws
if [ ! -f "assets/studypaws_mockup-tiny.jpg" ]; then
    convert assets/studypaws_mockup.jpg -resize 20x -quality 5 assets/studypaws_mockup-tiny.jpg
fi

# AI UX
if [ ! -f "assets/uiux_profile-tiny.jpg" ]; then
    convert assets/uiux_profile.svg -resize 20x -quality 5 assets/uiux_profile-tiny.jpg
fi

# Andak
if [ ! -f "assets/andak/laptop-mockup-andak-tiny.jpg" ]; then
    mkdir -p assets/andak
    convert "assets/andak/laptop mockup andak.png" -resize 20x -quality 5 assets/andak/laptop-mockup-andak-tiny.jpg
fi

echo "All thumbnails created successfully!" 