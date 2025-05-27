document.addEventListener('DOMContentLoaded', (event) => {
    const videos = document.querySelectorAll('.main-video');

    videos.forEach(video => {
        video.addEventListener('mouseover', () => {
            video.play();
        });

        video.addEventListener('mouseout', () => {
            video.pause();
        });
    });
});