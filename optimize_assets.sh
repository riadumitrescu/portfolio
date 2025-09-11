#!/bin/bash

# Asset Optimization Script for Portfolio
# This script optimizes images and videos while maintaining quality

echo "🎨 Starting portfolio asset optimization..."

# Create backup directory if it doesn't exist
mkdir -p assets_backup

# Function to backup and optimize images
optimize_image() {
    local file="$1"
    local backup="assets_backup/$(basename "$file")"
    
    # Skip if already backed up
    if [ ! -f "$backup" ]; then
        echo "📸 Backing up and optimizing: $file"
        cp "$file" "$backup"
        
        # Get file size for comparison
        local original_size=$(ls -lh "$file" | awk '{print $5}')
        
        # Optimize based on file type and size
        if [[ "$file" == *.png ]]; then
            # PNG optimization - reduce to 80% quality, max dimension 1920px
            magick "$file" -resize '1920x1920>' -quality 80 "$file"
        elif [[ "$file" == *.jpg ]] || [[ "$file" == *.jpeg ]]; then
            # JPEG optimization - 75% quality, max dimension 1920px
            magick "$file" -resize '1920x1920>' -quality 75 "$file"
        fi
        
        local new_size=$(ls -lh "$file" | awk '{print $5}')
        echo "   Original: $original_size → Optimized: $new_size"
    else
        echo "⏭️  Skipping already optimized: $file"
    fi
}

# Function to optimize videos
optimize_video() {
    local file="$1"
    local backup="assets_backup/$(basename "$file")"
    local optimized="${file%.*}_optimized.${file##*.}"
    
    # Skip if already backed up
    if [ ! -f "$backup" ]; then
        echo "🎬 Backing up and optimizing: $file"
        cp "$file" "$backup"
        
        # Get file size for comparison
        local original_size=$(ls -lh "$file" | awk '{print $5}')
        
        # Optimize video - reduce size while maintaining quality
        if [[ "$file" == *.mp4 ]]; then
            ffmpeg -i "$file" -c:v libx264 -crf 28 -c:a aac -b:a 128k -movflags +faststart "$optimized" -y 2>/dev/null
            if [ $? -eq 0 ]; then
                mv "$optimized" "$file"
                local new_size=$(ls -lh "$file" | awk '{print $5}')
                echo "   Original: $original_size → Optimized: $new_size"
            fi
        elif [[ "$file" == *.mov ]]; then
            ffmpeg -i "$file" -c:v libx264 -crf 28 -c:a aac -b:a 128k -movflags +faststart "${file%.*}.mp4" -y 2>/dev/null
            if [ $? -eq 0 ]; then
                rm "$file"
                mv "${file%.*}.mp4" "$file"
                local new_size=$(ls -lh "$file" | awk '{print $5}')
                echo "   Original: $original_size → Optimized: $new_size (converted to MP4)"
            fi
        fi
    else
        echo "⏭️  Skipping already optimized: $file"
    fi
}

# Optimize the largest images first (>1MB)
echo "🖼️  Optimizing large images (>1MB)..."
find assets -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | while read file; do
    size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    if [ "$size" -gt 1048576 ]; then  # 1MB in bytes
        optimize_image "$file"
    fi
done

echo "🎥 Optimizing large videos (>1MB)..."
find assets -name "*.mp4" -o -name "*.mov" | while read file; do
    size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    if [ "$size" -gt 1048576 ]; then  # 1MB in bytes
        optimize_video "$file"
    fi
done

echo "✅ Asset optimization complete!"
echo "📁 Original files backed up to assets_backup/"
echo "💾 Check file sizes with: du -sh assets/"
