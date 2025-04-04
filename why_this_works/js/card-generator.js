// Function to generate mini-cards from the database
function generateMiniCards() {
    const cardsContainer = document.querySelector('.cards-container');
    if (!cardsContainer) return;
    
    // Clear existing cards
    cardsContainer.innerHTML = '';
    
    // Generate cards for each category
    for (const category in cardDatabase) {
        cardDatabase[category].forEach(card => {
            const miniCard = createMiniCard(card, category);
            cardsContainer.appendChild(miniCard);
        });
    }
    
    // Initialize card functionality after generation
    initializeCardFunctionality();
    
    // Remove any old mini-cards containers that might interfere with our layout
    const oldMiniCardsContainers = document.querySelectorAll('.mini-cards-container');
    oldMiniCardsContainers.forEach(container => {
        if (container.parentElement && container.parentElement.classList.contains('w-full')) {
            container.parentElement.style.display = 'none';
        }
    });
}

// Function to create a single mini-card element
function createMiniCard(cardData, category) {
    const miniCard = document.createElement('div');
    miniCard.className = 'mini-card';
    miniCard.dataset.id = cardData.id;
    miniCard.dataset.category = category;
    
    miniCard.innerHTML = `
        <div class="mini-card-inner">
            <div class="mini-card-front">
                <div class="mini-card-tag">${category}</div>
                
                <div class="mini-card-image-container">
                    <img src="${cardData.image}" alt="${cardData.title}">
                </div>
                
                <div class="mini-card-title">${cardData.title}</div>
                <div class="mini-card-subtitle">${cardData.subtitle}</div>
            </div>
            <div class="mini-card-back">
                <div class="card-actions">
                    <a class="video-btn" href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank">
                        <svg viewBox="0 0 24 24">
                            <path d="M10 16.5V7.5L16 12L10 16.5Z"/>
                        </svg>
                    </a>
                    
                    <button class="bookmark-btn" onclick="toggleBookmark(this)">
                        <svg viewBox="0 0 24 24">
                            <path d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.7403 5.80653 22.1765 6.44721 21.7764L12 18.118L17.5528 21.7764C18.1935 22.1765 19 21.7403 19 21V3C19 2.44772 18.5523 2 18 2H6Z"/>
                        </svg>
                    </button>
                </div>

                <div class="mini-card-back-content">
                    <div class="mini-card-title">${cardData.title}</div>
                    
                    <div class="mini-card-section">
                        <div class="section-title">📌 Explanation</div>
                        <div class="section-content">${cardData.explanation}</div>
                        <div class="section-divider"></div>
                    </div>
                    
                    <div class="mini-card-section">
                        <div class="section-title">🔹 Example</div>
                        <div class="section-content">${cardData.example}</div>
                        <div class="section-divider"></div>
                    </div>
                    
                    <div class="mini-card-section">
                        <div class="section-title">💡 Try this</div>
                        <div class="section-content">${cardData.suggestion}</div>
                        <div class="section-divider"></div>
                    </div>
                    
                    <div class="read-more-btn">Read more</div>
                </div>
            </div>
        </div>
    `;
    
    return miniCard;
}

// Function to create a large card from card data
function createLargeCard(cardData, category) {
    return `
        <div class="card" data-id="${cardData.id}" data-category="${category}">
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-tag">${category}</div>
                    
                    <div class="card-image-container">
                        <img src="${cardData.image}" alt="${cardData.title}">
                    </div>
                    
                    <div class="card-title">Why do you ${cardData.title.toLowerCase().replace('the ', '')}?</div>
                    <div class="card-subtitle">${cardData.title}</div>
                </div>

                <div class="card-back">
                    <!-- Action buttons at the top -->
                    <div class="card-actions">
                        <a class="video-btn" href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank">
                            <svg viewBox="0 0 24 24">
                                <path d="M10 16.5V7.5L16 12L10 16.5Z"/>
                            </svg>
                        </a>
                        
                        <button class="bookmark-btn" onclick="toggleBookmark(this)">
                            <svg viewBox="0 0 24 24">
                                <path d="M6 2C5.44772 2 5 2.44772 5 3V21C5 21.7403 5.80653 22.1765 6.44721 21.7764L12 18.118L17.5528 21.7764C18.1935 22.1765 19 21.7403 19 21V3C19 2.44772 18.5523 2 18 2H6Z"/>
                            </svg>
                        </button>
                    </div>

                    <!-- Main content with proper spacing from top buttons -->
                    <div class="card-back-content">
                        <div class="card-title">${cardData.title}</div>
                        
                        <div class="card-section">
                            <div class="section-title">📖 Main Idea</div>
                            <div class="section-content">${cardData.explanation}</div>
                            <div class="section-divider"></div>
                        </div>
                        
                        <div class="card-section">
                            <div class="section-title">🤔 Example</div>
                            <div class="section-content">${cardData.example}</div>
                            <div class="section-divider"></div>
                        </div>

                        <div class="card-section">
                            <div class="section-title">💡 Try this</div>
                            <div class="section-content">${cardData.suggestion}</div>
                            <div class="section-divider"></div>
                        </div>

                        <div class="read-more-btn">Read more</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to get random cards from the database
function getRandomCards(count = 3) {
    // Flatten the database into a single array of cards with their categories
    const allCards = [];
    for (const category in cardDatabase) {
        cardDatabase[category].forEach(card => {
            allCards.push({ card, category });
        });
    }
    
    // Shuffle the array
    const shuffled = [...allCards].sort(() => 0.5 - Math.random());
    
    // Return the first 'count' cards
    return shuffled.slice(0, count);
}

// Function to populate the large cards section with random cards
function populateRandomLargeCards() {
    const largeCardsContainer = document.querySelector('.large-cards-container');
    if (!largeCardsContainer) return;
    
    // Get 3 random cards
    const randomCards = getRandomCards(3);
    
    // Clear existing cards
    largeCardsContainer.innerHTML = '';
    
    // Add the random cards
    randomCards.forEach(({ card, category }) => {
        const largeCardHTML = createLargeCard(card, category);
        largeCardsContainer.innerHTML += largeCardHTML;
    });
    
    // Initialize bookmark functionality for the new cards
    loadBookmarks();
}

// Function to initialize card functionality
function initializeCardFunctionality() {
    // Add event listeners for read more buttons
    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('This would open a detailed view of the card');
        });
    });
    
    // Load saved bookmarks
    loadBookmarks();
}

// Function to filter cards by category
function filterCardsByCategory(category) {
    const cards = document.querySelectorAll('.mini-card');
    
    if (category === 'all') {
        cards.forEach(card => {
            card.style.display = 'block';
        });
    } else {
        cards.forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Initialize cards when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Generate mini-cards
    generateMiniCards();
    
    // Populate large cards with random selections
    populateRandomLargeCards();
    
    // Add event listener for "Surprise Me" button
    const surpriseMeButton = document.querySelector('#shuffle-btn');
    if (surpriseMeButton) {
        surpriseMeButton.addEventListener('click', function() {
            populateRandomLargeCards();
        });
    }
    
    // Add event listeners for category filters
    const categoryButtons = document.querySelectorAll('.explore-card');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const categoryText = this.querySelector('span').textContent;
            // Map the button text to the category in our database
            let category;
            switch(categoryText) {
                case 'Thoughts':
                    category = 'Thoughts';
                    break;
                case 'People':
                    category = 'People';
                    break;
                case 'Action':
                    category = 'Action';
                    break;
                case 'Choices':
                    category = 'Choices';
                    break;
                default:
                    category = 'all';
            }
            filterCardsByCategory(category);
        });
    });
    
    // Add event listener for "Show All" button that might be added dynamically
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('show-all-btn')) {
            filterCardsByCategory('all');
        }
    });
}); 