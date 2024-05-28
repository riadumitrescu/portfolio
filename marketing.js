window.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      let isDragging = false;
      let offsetX, offsetY;
  
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
  });
  