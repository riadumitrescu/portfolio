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

# UI UX Projects section
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

# Other Projects section
# Memories
if [ ! -f "assets/memories/memoriescharacters-tiny.jpg" ]; then
    mkdir -p assets/memories
    convert assets/memories/memoriescharacters.png -resize 20x -quality 5 assets/memories/memoriescharacters-tiny.jpg
fi

# Love
if [ ! -f "assets/love/cover-tiny.jpg" ]; then
    mkdir -p assets/love
    convert assets/love/cover.png -resize 20x -quality 5 assets/love/cover-tiny.jpg
fi

# 3D
if [ ! -f "assets/3d/teashop-tiny.jpg" ]; then
    mkdir -p assets/3d
    convert assets/3d/teashop.png -resize 20x -quality 5 assets/3d/teashop-tiny.jpg
fi

# Fine Arts
if [ ! -f "assets/fine_arts/silence-tiny.jpg" ]; then
    mkdir -p assets/fine_arts
    convert assets/fine_arts/silence.jpg -resize 20x -quality 5 assets/fine_arts/silence-tiny.jpg
fi

# Letters
if [ ! -f "assets/letters/final-tiny.jpg" ]; then
    mkdir -p assets/letters
    convert assets/letters/final.jpg -resize 20x -quality 5 assets/letters/final-tiny.jpg
fi

# EMAG
if [ ! -f "assets/emag2024logo-tiny.jpg" ]; then
    convert assets/emag2024logo.png -resize 20x -quality 5 assets/emag2024logo-tiny.jpg
fi

# Brands section
# Marie Lee Store
if [ ! -f "assets/brand/ML-tiny.jpg" ]; then
    mkdir -p assets/brand
    convert assets/brand/ML.png -resize 20x -quality 5 assets/brand/ML-tiny.jpg
fi

# Let's Uni
if [ ! -f "assets/letsuni/letsuni-tiny.jpg" ]; then
    mkdir -p assets/letsuni
    convert assets/letsuni/letsuni.png -resize 20x -quality 5 assets/letsuni/letsuni-tiny.jpg
fi

# Instagram
if [ ! -f "assets/instagram/INSTAGRAM-tiny.jpg" ]; then
    mkdir -p assets/instagram
    convert assets/instagram/INSTAGRAM.png -resize 20x -quality 5 assets/instagram/INSTAGRAM-tiny.jpg
fi

echo "All thumbnails created successfully!" 