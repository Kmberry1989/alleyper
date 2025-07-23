// Artist Alley Gallery Application
class ArtistAlleyGallery {
    constructor() {
        this.artworks = [
            {
                id: 1,
                title: "Highland Covered Bridge",
                artist: "Alyson Hatcher-Kendall",
                medium: "acrylic on marine board",
                dimensions: "4' x 4'",
                price: 300,
                currency: "USD",
                description: "A beautiful depiction of Indiana's covered bridge heritage, capturing the rustic charm and historical significance of these iconic structures.",
                imageUrl: "assets/image/HighlandCoveredBridge.jpg",
                arModel: "assets/augmented/HighlandCoveredBridge.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 2,
                title: "Complex Autumn",
                artist: "Dajanell Johnson",
                medium: "acrylic on marine board",
                dimensions: "3' x 4'",
                price: 300,
                currency: "USD",
                description: "An intricate exploration of autumn's changing colors, showcasing the complexity and beauty of seasonal transformation.",
                imageUrl: "assets/image/ComplexAutumn.PNG",
                arModel: "assets/augmented/ComplexAutumn.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 3,
                title: "Righteous Judgement",
                artist: "Deb Edwards",
                medium: "acrylic on marine board",
                dimensions: "5'6\" x 3'",
                price: null,
                priceNote: "Request price",
                currency: "USD",
                description: "A powerful piece exploring themes of justice and morality, inviting viewers to contemplate the nature of right and wrong.",
                imageUrl: "assets/image/RighteousJudgement.jpg",
                arModel: "assets/augmented/RighteousJudgement.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 4,
                title: "Fairy House",
                artist: "Lana Kirtley",
                medium: "fabric on marine board",
                dimensions: "4' x 4'",
                price: 300,
                currency: "USD",
                description: "Whimsical textile art creating a magical fairy dwelling that sparks imagination and wonder in viewers of all ages.",
                imageUrl: "assets/image/FairyHouse.jpg",
                arModel: "assets/augmented/FairyHouse.usdz.usdz",
                available: true,
                category: "mixed"
            },
            {
                id: 5,
                title: "Kittyo's Rainbow",
                artist: "Jaetta Hall",
                medium: "acrylic and fabric",
                dimensions: "72\" x 80\"",
                price: 160,
                currency: "USD",
                description: "A vibrant celebration of color and texture, combining traditional painting with textile elements for a dynamic visual experience.",
                imageUrl: "assets/image/KittyosRainbow.png",
                arModel: "assets/augmented/KittyosRainbow.usdz.usdz",
                available: true,
                category: "mixed"
            },
            {
                id: 6,
                title: "AI USA",
                artist: "Patrick Redmon",
                medium: "AI art printed on aluminum",
                dimensions: "4' x 5'",
                price: 800,
                currency: "USD",
                description: "Contemporary AI-generated artwork exploring American themes, bridging traditional patriotic imagery with cutting-edge technology.",
                imageUrl: "assets/image/AiUsa.PNG",
                arModel: "assets/augmented/AIUSA.usdz.usdz",
                available: true,
                category: "mixed"
            },
            {
                id: 7,
                title: "Grow & Glow",
                artist: "Mia Flowers",
                medium: "acrylic on marine board",
                dimensions: "4' x 6'",
                price: 275,
                currency: "USD",
                description: "An uplifting piece about personal growth and inner light, inspiring viewers to embrace their own journey of self-discovery.",
                imageUrl: "assets/image/GrowandGlow.PNG",
                arModel: "assets/augmented/GrowandGlow.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 8,
                title: "Broken",
                artist: "Ramona 'Mona' Daniels",
                medium: "acrylic on marine board",
                dimensions: "2' x 4'",
                price: 715,
                currency: "USD",
                description: "A raw and honest exploration of healing and resilience, showing how beauty can emerge from difficult experiences.",
                imageUrl: "assets/image/Broken.PNG",
                arModel: "assets/augmented/Broken.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 9,
                title: "My Mind's Eye",
                artist: "Sam Prifogle",
                medium: "acrylic on marine board",
                dimensions: "4' x 5'",
                price: 500,
                currency: "USD",
                description: "An introspective journey into perception and consciousness, challenging viewers to examine their own inner vision.",
                imageUrl: "assets/image/MyMindsEye.jpg",
                arModel: "assets/augmented/MyMindsEye.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 10,
                title: "Flowers for Kokomo",
                artist: "Oscar Toloza",
                medium: "acrylic on marine board",
                dimensions: "8' x 8'",
                price: null,
                priceNote: "Request price",
                currency: "USD",
                description: "A large-scale floral celebration dedicated to the city of Kokomo, embodying the community's spirit and natural beauty.",
                imageUrl: "assets/image/FlowersforKokomo.jpg",
                arModel: "assets/augmented/FlowersforKokomo.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 11,
                title: "Radiant Wilds",
                artist: "Michelle Sutton",
                medium: "interior/exterior spray paint",
                dimensions: "8' x 8'",
                price: 3000,
                currency: "USD",
                description: "Bold spray paint artwork capturing the wild beauty of nature with vibrant colors and dynamic compositions.",
                imageUrl: "assets/image/RadiantWild.jpg",
                arModel: "assets/augmented/RadiantWild.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 12,
                title: "Joan and Magdalena",
                artist: "Tarja Harney",
                medium: "acrylic and spray paint",
                dimensions: "3' x 3'",
                price: 200,
                currency: "USD",
                description: "A portrait study exploring identity and relationships through a blend of traditional and contemporary painting techniques.",
                imageUrl: "assets/image/JoanandMagdalena.png",
                arModel: "assets/augmented/JoanandMagdalena.usdz.usdz",
                available: true,
                category: "mixed"
            },
            {
                id: 13,
                title: "Wildflower",
                artist: "Rose Bloom",
                medium: "acrylic on marine board",
                dimensions: "4' x 6'",
                price: 1000,
                currency: "USD",
                description: "Natural beauty captured in vibrant acrylic colors, celebrating the delicate strength and wild spirit of native flowers.",
                imageUrl: "assets/image/Wildflower.PNG",
                arModel: "assets/augmented/Wildflower.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 14,
                title: "Seeds of Hope",
                artist: "Lesley Wysong",
                medium: "acrylic on marine board",
                dimensions: "4' x 6'8\"",
                price: 450,
                currency: "USD",
                description: "An optimistic vision of growth and possibility, inspiring hope for the future through symbolic imagery of new beginnings.",
                imageUrl: "assets/image/SeedsofHope.png",
                arModel: "assets/augmented/SeedsofHope.usdz.usdz",
                available: true,
                category: "acrylic"
            },
            {
                id: 15,
                title: "Guardians of the Void",
                artist: "Marcia Blacklidge",
                medium: "mixed media",
                dimensions: "4' x 6'",
                price: null,
                priceNote: "Request price",
                currency: "USD",
                description: "Mysterious mixed media exploration of space and protection, combining various materials to create depth and intrigue.",
                imageUrl: "assets/image/GuardiansoftheVoid.jpg",
                arModel: "assets/augmented/GuardiansoftheVoid.usdz.usdz",
                available: true,
                category: "mixed"
            },
            {
                id: 16,
                title: "Bridge Over Troubled Waters",
                artist: "Troy Caldwell",
                medium: "granite",
                dimensions: "60\" x 24\" x 16\"",
                price: 3000,
                currency: "USD",
                description: "A powerful granite sculpture representing resilience and connection, carved with masterful skill to convey strength and hope.",
                imageUrl: "assets/image/BridgeOverTroubledWater1.jpg",
                arModel: "assets/augmented/HighlandCoveredBridge.usdz",
                available: true,
                isSculpture: true
            }
        ];
        this.currentArtwork = null;
        this.currentFilter = 'all';
        this.init();
    }
    init() {
        this.renderGallery();
        this.bindEvents();
    }

    bindEvents() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Form submissions
        document.getElementById('inquiryForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleInquirySubmission(e);
        });

        document.getElementById('priceWatchForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handlePriceWatchSubmission(e);
        });

        document.getElementById('generalNotificationForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleGeneralNotificationSubmission(e);
        });

        // Modal close handlers
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });

        // Add event listeners for artwork cards after they're rendered
        this.bindArtworkCardEvents();
    }

    bindArtworkCardEvents() {
        // Use event delegation for dynamically created elements
        document.getElementById('artworkGrid').addEventListener('click', (e) => {
            const artworkCard = e.target.closest('.artwork-card');
            if (artworkCard) {
                const artworkId = parseInt(artworkCard.dataset.artworkId);
                this.openArtworkModal(artworkId);
            }
        });

        // Keyboard support for artwork cards
        document.getElementById('artworkGrid').addEventListener('keydown', (e) => {
            const artworkCard = e.target.closest('.artwork-card');
            if (artworkCard && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                const artworkId = parseInt(artworkCard.dataset.artworkId);
                this.openArtworkModal(artworkId);
            }
        });
    }

    renderGallery() {
        const grid = document.getElementById('artworkGrid');
        const filteredArtworks = this.getFilteredArtworks();
        
        grid.innerHTML = filteredArtworks.map(artwork => `
            <div class="artwork-card" data-artwork-id="${artwork.id}" tabindex="0" role="button" aria-label="View ${artwork.title} by ${artwork.artist}">
                <img class="artwork-image" src="${artwork.imageUrl}" alt="${artwork.title}" loading="lazy" />
                <div class="artwork-card-content">
                    <h3 class="artwork-title">${artwork.title}</h3>
                    <p class="artist-name">by ${artwork.artist}</p>
                    <div class="artwork-meta">
                        <div class="meta-item">
                            <i class="fas fa-paint-brush" aria-hidden="true"></i>
                            <span>${artwork.medium}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-ruler" aria-hidden="true"></i>
                            <span>${artwork.dimensions}</span>
                        </div>
                        <div class="meta-item price-item">
                            <i class="fas fa-tag" aria-hidden="true"></i>
                            <span>${this.formatPrice(artwork)}</span>
                        </div>
                    </div>
                    <div class="artwork-badges">
                        <span class="ar-badge">
                            <i class="fas fa-cube" aria-hidden="true"></i>
                            AR Available
                        </span>
                    </div>
                </div>
            </div>
        `).join('');

        // Re-bind events after rendering
        this.bindArtworkCardEvents();
    }

    getFilteredArtworks() {
        if (this.currentFilter === 'all') {
            return this.artworks;
        }
        return this.artworks.filter(artwork => artwork.category === this.currentFilter);
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        this.renderGallery();
    }

    formatPrice(artwork) {
        if (artwork.price === null) {
            return artwork.priceNote || 'Request price';
        }
        return `$${artwork.price.toLocaleString()} ${artwork.currency}`;
    }

    openArtworkModal(artworkId) {
        this.currentArtwork = this.artworks.find(art => art.id === artworkId);
        if (!this.currentArtwork) return;

        // Populate modal content
        document.getElementById('modalArtworkImage').src = this.currentArtwork.imageUrl;
        document.getElementById('modalArtworkImage').alt = this.currentArtwork.title;
        document.getElementById('modalArtworkTitle').textContent = this.currentArtwork.title;
        document.getElementById('modalArtistName').textContent = `by ${this.currentArtwork.artist}`;
        document.getElementById('modalMedium').textContent = this.currentArtwork.medium;
        document.getElementById('modalDimensions').textContent = this.currentArtwork.dimensions;
        document.getElementById('modalPrice').textContent = this.formatPrice(this.currentArtwork);
        document.getElementById('modalDescription').textContent = this.currentArtwork.description;

        this.showModal('artworkModal');
    }

    openARViewer() {
        if (!this.currentArtwork) return;

        // Set up AR model viewer with a placeholder GLB URL
        const modelViewer = document.getElementById('arModelViewer');
        modelViewer.src = `https://modelviewer.dev/shared-assets/models/Astronaut.glb`; // Using a working sample model
        modelViewer.alt = `3D model of ${this.currentArtwork.title}`;
        modelViewer.poster = this.currentArtwork.imageUrl;

        this.showModal('arModal');
    }

    initializeARViewer() {
        // Initialize model-viewer component when available
        const modelViewer = document.getElementById('arModelViewer');
        if (modelViewer) {
            modelViewer.addEventListener('load', () => {
                console.log('3D model loaded successfully');
            });
            
            modelViewer.addEventListener('error', (error) => {
                console.warn('3D model failed to load:', error);
                this.showMessage('AR model temporarily unavailable. Please try again later.', 'info');
            });
        }
    }

    activateAR() {
        const modelViewer = document.getElementById('arModelViewer');
        if (modelViewer && modelViewer.canActivateAR) {
            modelViewer.activateAR();
        } else {
            this.showMessage('AR viewing activated! On mobile devices, tap the AR icon in the model viewer to place the artwork in your space.', 'info');
        }
    }

    openInquiryModal() {
        if (!this.currentArtwork) return;

        document.getElementById('inquiryArtworkTitle').textContent = this.currentArtwork.title;
        document.getElementById('inquiryArtistName').textContent = this.currentArtwork.artist;
        document.getElementById('inquiryPrice').textContent = this.formatPrice(this.currentArtwork);

        this.showModal('inquiryModal');
    }

    openPriceWatchModal() {
        if (!this.currentArtwork) return;

        document.getElementById('watchArtworkTitle').textContent = this.currentArtwork.title;
        this.showModal('priceWatchModal');
    }

    handleInquirySubmission(e) {
        const formData = new FormData(e.target);
        const inquiryData = {
            artwork: this.currentArtwork,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        // Simulate form submission
        this.showLoadingState(e.target);
        
        setTimeout(() => {
            this.hideLoadingState(e.target);
            this.showMessage('Your inquiry has been sent successfully! We\'ll contact you within 24 hours.', 'success');
            this.closeModal('inquiryModal');
            e.target.reset();
        }, 2000);
    }

    handlePriceWatchSubmission(e) {
        const formData = new FormData(e.target);
        const watchData = {
            watchType: formData.get('watchType'),
            email: formData.get('email'),
            notifications: formData.getAll('notifications'),
            artwork: this.currentArtwork
        };

        this.showLoadingState(e.target);
        
        setTimeout(() => {
            this.hideLoadingState(e.target);
            this.showMessage('Price watch alert set up successfully! You\'ll receive notifications at the provided email.', 'success');
            this.closeModal('priceWatchModal');
            e.target.reset();
        }, 1500);
    }

    handleGeneralNotificationSubmission(e) {
        const formData = new FormData(e.target);
        const notificationData = {
            email: formData.get('email'),
            preferences: formData.getAll('preferences')
        };

        this.showLoadingState(e.target);
        
        setTimeout(() => {
            this.hideLoadingState(e.target);
            this.showMessage('Successfully subscribed to gallery notifications!', 'success');
            this.closeModal('notificationModal');
            e.target.reset();
        }, 1500);
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('active');
        modal.style.display = 'flex';
        
        // Focus management
        const firstFocusable = modal.querySelector('button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 100);
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 250);
    }

    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            this.closeModal(modal.id);
        });
    }

    showMessage(message, type = 'info') {
        const container = document.getElementById('messageContainer');
        const messageEl = document.createElement('div');
        messageEl.className = `message message--${type}`;
        
        const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
        messageEl.innerHTML = `
            <i class="fas fa-${icon}" aria-hidden="true"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(messageEl);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.style.animation = 'slideOutRight 0.3s ease-in';
                setTimeout(() => {
                    if (messageEl.parentNode) {
                        container.removeChild(messageEl);
                    }
                }, 300);
            }
        }, 5000);
    }

    showLoadingState(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
    }

    hideLoadingState(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        // Restore original button content based on form
        if (form.id === 'inquiryForm') {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Inquiry';
        } else if (form.id === 'priceWatchForm') {
            submitBtn.innerHTML = '<i class="fas fa-bell"></i> Set Up Alerts';
        } else if (form.id === 'generalNotificationForm') {
            submitBtn.innerHTML = '<i class="fas fa-envelope"></i> Subscribe to Updates';
        }
    }

    zoomImage() {
        const img = document.getElementById('modalArtworkImage');
        if (img.style.transform === 'scale(2)') {
            img.style.transform = 'scale(1)';
            img.style.cursor = 'zoom-in';
        } else {
            img.style.transform = 'scale(2)';
            img.style.cursor = 'zoom-out';
            img.style.transition = 'transform 0.3s ease';
        }
    }
}

// Initialize gallery instance globally
let gallery;

// Global functions for HTML onclick handlers
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

function openNotificationModal() {
    if (gallery) {
        gallery.showModal('notificationModal');
    }
}

function closeModal(modalId) {
    if (gallery) {
        gallery.closeModal(modalId);
    }
}

function openARViewer() {
    if (gallery) {
        gallery.openARViewer();
    }
}

function openInquiryModal() {
    if (gallery) {
        gallery.openInquiryModal();
    }
}

function openPriceWatchModal() {
    if (gallery) {
        gallery.openPriceWatchModal();
    }
}

function activateAR() {
    if (gallery) {
        gallery.activateAR();
    }
}

function zoomImage() {
    if (gallery) {
        gallery.zoomImage();
    }
}

// CSS animation for slide out
const slideOutRightCSS = `
@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
`;

// Add the animation CSS to the page
const style = document.createElement('style');
style.textContent = slideOutRightCSS;
document.head.appendChild(style);

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    gallery = new ArtistAlleyGallery();
});

// Service Worker registration for offline functionality (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(() => console.log('Service Worker registration failed'));
    });
}

// Handle online/offline status
window.addEventListener('online', () => {
    if (gallery) {
        gallery.showMessage('Connection restored. All features are now available.', 'success');
    }
});

window.addEventListener('offline', () => {
    if (gallery) {
        gallery.showMessage('You are currently offline. Some features may be limited.', 'info');
    }
});