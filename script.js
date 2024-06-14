document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const images = document.images;
    let loadedImagesCount = 0;

    function imageLoaded() {
        loadedImagesCount++;
        if (loadedImagesCount === images.length) {
            loader.style.display = 'none';
            content.style.display = 'block';
        }
    }

    if (images.length === 0) {
        // If there are no images, hide loader immediately
        loader.style.display = 'none';
        content.style.display = 'block';
    } else {
        for (let i = 0; i < images.length; i++) {
            if (images[i].complete) {
                imageLoaded();
            } else {
                images[i].addEventListener('load', imageLoaded);
                images[i].addEventListener('error', imageLoaded);
            }
        }
    }
});
