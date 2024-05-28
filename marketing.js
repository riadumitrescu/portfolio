window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('marketing-video');
    let isDragging = false;
    let offsetX, offsetY;

    // Handle mouse events for dragging the video
    video.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - video.offsetLeft;
        offsetY = e.clientY - video.offsetTop;
        video.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            video.style.cursor = 'grab';
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            video.style.left = `${x}px`;
            video.style.top = `${y}px`;
        }
    });
});
