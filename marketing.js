const video = document.getElementById('video');

let isDragging = false;
let offsetX, offsetY;

video.addEventListener('mousedown', startDrag);
video.addEventListener('mouseup', stopDrag);
video.addEventListener('mousemove', drag);

function startDrag(e) {
    isDragging = true;
    offsetX = e.clientX - video.getBoundingClientRect().left;
    offsetY = e.clientY - video.getBoundingClientRect().top;
}

function stopDrag() {
    isDragging = false;
}

function drag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    video.style.left = `${x}px`;
    video.style.top = `${y}px`;
}
