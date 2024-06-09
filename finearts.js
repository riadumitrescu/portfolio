document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.grid-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('fullscreen');
        });
    });
});
