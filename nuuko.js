document.addEventListener('DOMContentLoaded', function() {
    // Initialize image zoom functionality
    initializeImageZoom();
    
    // Initialize all carousels on the page
    const carousels = document.querySelectorAll('.carousel-wrapper');
    
    carousels.forEach((carousel, carouselIndex) => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const dotsContainer = carousel.parentElement.querySelector('.carousel-dots');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');
        let currentSlide = 0;

        // Only initialize if there are slides
        if (slides.length === 0) return;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        // Show first slide
        slides[0].classList.add('active');

        // Previous slide button
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                updateSlides();
            });
        }

        // Next slide button
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                updateSlides();
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }

        function updateSlides() {
            // Update slides
            slides.forEach(slide => slide.classList.remove('active'));
            slides[currentSlide].classList.add('active');

            // Update dots
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        }

        // Auto-advance carousel every 5 seconds (optional)
        // setInterval(() => {
        //     currentSlide = (currentSlide + 1) % slides.length;
        //     updateSlides();
        // }, 5000);
    });
});

// Image zoom functionality
function initializeImageZoom() {
    // Select all images that should be zoomable
    const zoomableImages = document.querySelectorAll('.memory-image, .side-image, .carousel-slide img');
    
    // Create zoom overlay
    const overlay = document.createElement('div');
    overlay.className = 'image-zoom-overlay';
    overlay.innerHTML = `
        <div class="zoom-container">
            <img class="zoomed-image" src="" alt="">
            <button class="zoom-close" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `;
    document.body.appendChild(overlay);
    
    const zoomedImage = overlay.querySelector('.zoomed-image');
    const closeButton = overlay.querySelector('.zoom-close');
    
    // Add click listeners to images
    zoomableImages.forEach(image => {
        image.style.cursor = 'zoom-in';
        image.addEventListener('click', () => {
            zoomedImage.src = image.src;
            zoomedImage.alt = image.alt;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close functionality
    function closeZoom() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    closeButton.addEventListener('click', closeZoom);
    
    // Close on overlay click (but not on image)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeZoom();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeZoom();
        }
    });
}

// Persona Carousel functionality
let currentPersonaSlide = 1;

function changePersona(direction) {
    const slides = document.querySelectorAll('.persona-slide');
    const dots = document.querySelectorAll('.persona-dot');
    
    // Remove active class from current slide and dot
    slides[currentPersonaSlide - 1].classList.remove('active');
    dots[currentPersonaSlide - 1].classList.remove('active');
    
    // Update current slide index
    currentPersonaSlide += direction;
    
    // Handle wrap around
    if (currentPersonaSlide > slides.length) {
        currentPersonaSlide = 1;
    } else if (currentPersonaSlide < 1) {
        currentPersonaSlide = slides.length;
    }
    
    // Add active class to new slide and dot
    slides[currentPersonaSlide - 1].classList.add('active');
    dots[currentPersonaSlide - 1].classList.add('active');
}

function currentPersona(slideNumber) {
    const slides = document.querySelectorAll('.persona-slide');
    const dots = document.querySelectorAll('.persona-dot');
    
    // Remove active class from current slide and dot
    slides[currentPersonaSlide - 1].classList.remove('active');
    dots[currentPersonaSlide - 1].classList.remove('active');
    
    // Set new current slide
    currentPersonaSlide = slideNumber;
    
    // Add active class to new slide and dot
    slides[currentPersonaSlide - 1].classList.add('active');
    dots[currentPersonaSlide - 1].classList.add('active');
}
