document.addEventListener('DOMContentLoaded', function() {
  // Create modal element for full video viewing
  const modalHTML = `
    <div class="video-modal">
      <div class="modal-content">
        <button class="close-modal">&times;</button>
        <video class="modal-video" controls></video>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  const videoModal = document.querySelector('.video-modal');
  const modalVideo = document.querySelector('.modal-video');
  const closeModalBtn = document.querySelector('.close-modal');
  
  // Function to handle video lazy loading
  function lazyLoadVideos() {
    const videos = document.querySelectorAll('.video-item video, .reel-item video');
    
    // Create IntersectionObserver to load videos only when in viewport
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start playing the video when it comes into view
          const video = entry.target;
          if (!video.getAttribute('data-loaded')) {
            video.play();
            video.classList.add('loaded');
            video.setAttribute('data-loaded', 'true');
          }
          // Unobserve after loading
          videoObserver.unobserve(video);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
    
    // Observe all videos
    videos.forEach(video => {
      video.classList.add('lazy-video');
      videoObserver.observe(video);
    });
  }
  
  // Handle play button clicks for marketing videos
  function setupVideoPlayback() {
    const playButtons = document.querySelectorAll('.play-btn');
    
    playButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent parent click event
        
        const videoItem = this.closest('.video-item');
        const video = videoItem.querySelector('video');
        const fullSrc = video.getAttribute('data-full-src') || video.getAttribute('src');
        
        // Set the video source and show modal
        modalVideo.setAttribute('src', fullSrc);
        videoModal.classList.add('active');
        modalVideo.play();
      });
    });
    
    // Handle clicking on video item
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach(item => {
      item.addEventListener('click', function() {
        const playBtn = this.querySelector('.play-btn');
        if (playBtn) {
          playBtn.click();
        }
      });
    });
    
    // Handle clicking on reel item - open Instagram URL instead of fullscreen
    const reelItems = document.querySelectorAll('.reel-item');
    reelItems.forEach(item => {
      item.addEventListener('click', function() {
        const instagramUrl = this.getAttribute('data-instagram-url');
        if (instagramUrl) {
          window.open(instagramUrl, '_blank');
        }
      });
    });
  }
  
  // Close modal when clicking the close button
  closeModalBtn.addEventListener('click', function() {
    videoModal.classList.remove('active');
    modalVideo.pause();
    modalVideo.removeAttribute('src');
  });
  
  // Close modal when clicking outside the content
  videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
      videoModal.classList.remove('active');
      modalVideo.pause();
      modalVideo.removeAttribute('src');
    }
  });
  
  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      videoModal.classList.remove('active');
      modalVideo.pause();
      modalVideo.removeAttribute('src');
    }
  });
  
  // Navbar transparency handling
  function handleNavbarTransparency() {
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('social-hero');
    
    if (heroSection) {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      
      window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
          navbar.classList.remove('transparent');
        } else {
          navbar.classList.add('transparent');
        }
      });
      
      // Initial check
      if (window.scrollY > 20) {
        navbar.classList.remove('transparent');
      } else {
        navbar.classList.add('transparent');
      }
    }
  }
  
  // Create a fixed-size optimized version for preview
  function prepareVideoThumbnails() {
    // This would normally be done server-side, but we're simulating it here
    const marketingVideos = document.querySelectorAll('.video-item video');
    
    marketingVideos.forEach(video => {
      if (!video.hasAttribute('data-full-src')) {
        // Save original source for full playback
        const originalSrc = video.getAttribute('src');
        video.setAttribute('data-full-src', originalSrc);
        
        // For this demo, we're not actually changing the src, but in production
        // you would point to a compressed/optimized version
        // video.setAttribute('src', originalSrc.replace('.mp4', '-thumbnail.mp4'));
      }
    });
  }
  
  // Stats counter animation
  function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statElement = entry.target;
          const value = statElement.innerText;
          
          // Extract the numeric part and the suffix
          const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
          const suffix = value.replace(/[\d.-]/g, '');
          
          // Animate from 0 to the target value
          let startValue = 0;
          const duration = 2000; // 2 seconds
          const increment = numericValue / (duration / 16); // Update every ~16ms (60fps)
          
          const animateCounter = () => {
            startValue += increment;
            if (startValue < numericValue) {
              statElement.innerText = Math.floor(startValue) + suffix;
              requestAnimationFrame(animateCounter);
            } else {
              statElement.innerText = value; // Set the original value
            }
          };
          
          requestAnimationFrame(animateCounter);
          statsObserver.unobserve(statElement);
        }
      });
    }, {
      threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
      statsObserver.observe(stat);
    });
  }
  
  // Navbar brand click to scroll to top
  const navbarBrand = document.querySelector('#simple-navbar .navbar-brand');
  if (navbarBrand) {
    navbarBrand.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Video hover functionality
  const videoItems = document.querySelectorAll('.video-item video');
  videoItems.forEach(video => {
    const videoItem = video.parentElement;
    
    videoItem.addEventListener('mouseenter', () => {
      if (video.paused) {
        video.play();
      }
    });
    
    videoItem.addEventListener('mouseleave', () => {
      if (!video.paused) {
        video.pause();
      }
    });
  });

  // Instagram reels hover functionality
  const reelItems = document.querySelectorAll('.reel-item video');
  reelItems.forEach(video => {
    const reelItem = video.parentElement;
    
    reelItem.addEventListener('mouseenter', () => {
      if (video.paused) {
        video.play();
      }
    });
    
    reelItem.addEventListener('mouseleave', () => {
      if (!video.paused) {
        video.pause();
      }
    });
  });
  
  // Initialize all functions
  lazyLoadVideos();
  setupVideoPlayback();
  handleNavbarTransparency();
  prepareVideoThumbnails();
  animateStats();
}); 