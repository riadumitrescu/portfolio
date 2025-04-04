// Bookmark functionality
function toggleBookmark(button) {
    button.classList.toggle('active');
    
    // Get the card element
    const card = button.closest('.mini-card, .card');
    const cardId = card.dataset.id;
    
    if (!cardId) {
        console.error('Card ID not found. Make sure all cards have a data-id attribute.');
        return;
    }
    
    // Save bookmark state to localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    if (button.classList.contains('active')) {
        if (!bookmarks.includes(cardId)) {
            bookmarks.push(cardId);
        }
    } else {
        const index = bookmarks.indexOf(cardId);
        if (index > -1) {
            bookmarks.splice(index, 1);
        }
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// Load bookmarks from localStorage
function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    
    document.querySelectorAll('.mini-card, .card').forEach(card => {
        const cardId = card.dataset.id;
        if (!cardId) return;
        
        const bookmarkBtn = card.querySelector('.bookmark-btn');
        
        if (bookmarks.includes(cardId) && bookmarkBtn) {
            bookmarkBtn.classList.add('active');
        }
    });
}

// View saved cards function
function viewSavedCards() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const cards = document.querySelectorAll('.mini-card, .card');
    
    if (bookmarks.length === 0) {
        alert('You have no saved cards. Bookmark cards to save them for later!');
        return;
    }
    
    // Hide all cards first
    cards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Show only bookmarked cards
    let foundCards = 0;
    cards.forEach(card => {
        const cardId = card.dataset.id;
        if (bookmarks.includes(cardId)) {
            card.style.display = 'block';
            foundCards++;
        }
    });
    
    // Add "Show All" button if it doesn't exist
    let showAllBtn = document.querySelector('.show-all-btn');
    if (!showAllBtn) {
        showAllBtn = document.createElement('button');
        showAllBtn.className = 'show-all-btn';
        showAllBtn.textContent = 'Show All Cards';
        showAllBtn.onclick = function() {
            cards.forEach(card => {
                card.style.display = 'block';
            });
            this.remove();
        };
        
        const cardsContainer = document.querySelector('.cards-container');
        if (cardsContainer) {
            cardsContainer.parentNode.insertBefore(showAllBtn, cardsContainer);
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    navLinks.classList.toggle('active');
    
    // Change menu icon based on menu state
    if (navLinks.classList.contains('active')) {
        menuIcon.innerHTML = '✕';
    } else {
        menuIcon.innerHTML = '☰';
    }
} 