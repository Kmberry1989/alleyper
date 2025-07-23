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
    // ...existing code...
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