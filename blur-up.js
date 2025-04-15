document.addEventListener('DOMContentLoaded', function() {
  // Get all blur-load containers
  const blurLoads = document.querySelectorAll('.blur-load');
  
  // Setup Intersection Observer to load images/videos when they're in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        
        // Handle image or video based on what's inside
        const media = container.querySelector('img, video');
        
        if (media) {
          if (media.tagName === 'IMG') {
            // For images
            const img = media;
            // If the image has data-src, load from there
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            
            // Ensure proper size
            img.style.height = '100%';
            img.style.width = '100%';
            img.style.objectFit = 'cover';
            
            img.onload = function() {
              container.classList.add('loaded');
            };
          } else if (media.tagName === 'VIDEO') {
            // For videos
            const video = media;
            
            // If video has data-src for source, load it
            const sources = video.querySelectorAll('source');
            let sourcesLoaded = 0;
            
            if (sources.length > 0) {
              sources.forEach(source => {
                if (source.dataset.src) {
                  source.src = source.dataset.src;
                  source.onload = function() {
                    sourcesLoaded++;
                    if (sourcesLoaded === sources.length) {
                      video.load();
                    }
                  };
                }
              });
            }
            
            // Mark as loaded when video can play
            video.oncanplay = function() {
              container.classList.add('loaded');
            };
            
            // For browsers that don't trigger oncanplay
            setTimeout(() => {
              container.classList.add('loaded');
            }, 1000);
            
            // Start loading video
            video.load();
          }
        }
        
        // Stop observing this element
        observer.unobserve(container);
      }
    });
  }, {
    rootMargin: '200px' // Load when within 200px of viewport
  });
  
  // Observe all blur-load containers
  blurLoads.forEach(blurLoad => {
    observer.observe(blurLoad);
  });
}); 