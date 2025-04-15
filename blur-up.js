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
            
            img.onload = function() {
              container.classList.add('loaded');
            };

            // If the image already has src attribute, consider it loaded
            if (img.src && !img.dataset.src) {
              container.classList.add('loaded');
            }
          } else if (media.tagName === 'VIDEO') {
            // For videos
            const video = media;
            
            // Get all sources
            const sources = video.querySelectorAll('source');
            let hasHlsSource = false;
            
            // Check if there's an HLS source (Mux stream)
            sources.forEach(source => {
              if (source.type === 'application/x-mpegURL' || source.type === 'application/vnd.apple.mpegurl') {
                hasHlsSource = true;
              }
            });
            
            // If video has data-src for source, load it
            sources.forEach(source => {
              if (source.dataset.src) {
                source.src = source.dataset.src;
              }
            });
            
            // Mark as loaded when video can play
            video.oncanplay = function() {
              container.classList.add('loaded');
            };
            
            // For browsers that don't trigger oncanplay or for HLS streams
            setTimeout(() => {
              container.classList.add('loaded');
            }, hasHlsSource ? 500 : 1000); // Faster timeout for HLS streams
            
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