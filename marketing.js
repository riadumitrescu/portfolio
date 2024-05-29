window.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');
  videos.forEach((video) => {
      let isDragging = false;
      let offsetX, offsetY;

      // Random initial position within display boundaries
      const maxX = window.innerWidth - video.offsetWidth;
      const maxY = window.innerHeight - video.offsetHeight;
      const initialX = Math.random() * maxX;
      const initialY = Math.random() * maxY;
      video.style.left = `${initialX}px`;
      video.style.top = `${initialY}px`;

      // Random initial rotation within specified boundaries
      const maxRotation = 30; // Maximum rotation in degrees
      const initialRotation = (Math.random() * maxRotation * 2) - maxRotation; // Random rotation to left or right
      video.style.transform = `rotate(${initialRotation}deg)`;

      // Mouse events
      video.addEventListener('mousedown', startDrag);
      window.addEventListener('mouseup', stopDrag);
      window.addEventListener('mousemove', drag);

      // Touch events
      video.addEventListener('touchstart', startDrag);
      window.addEventListener('touchend', stopDrag);
      window.addEventListener('touchmove', drag);

      function startDrag(e) {
          isDragging = true;
          const touch = e.type === 'touchstart' ? e.touches[0] : e;
          offsetX = touch.clientX - video.offsetLeft;
          offsetY = touch.clientY - video.offsetTop;
          video.style.cursor = 'grabbing';
          requestAnimationFrame(updatePosition);
      }

      function stopDrag() {
          if (isDragging) {
              isDragging = false;
              video.style.cursor = 'grab';
          }
      }

      function drag(e) {
          if (isDragging) {
              const touch = e.type === 'touchmove' ? e.touches[0] : e;
              const x = touch.clientX - offsetX;
              const y = touch.clientY - offsetY;
              video.style.left = `${x}px`;
              video.style.top = `${y}px`;
          }
      }

      function updatePosition() {
          if (isDragging) {
              requestAnimationFrame(updatePosition);
          }
          const x = parseFloat(video.style.left);
          const y = parseFloat(video.style.top);
          video.style.left = `${x}px`;
          video.style.top = `${y}px`;
      }
  });
});
