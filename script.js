// Sample restaurant data
const restaurants = [
    {
        name: "Pizza Paradise",
        cuisine: "Italian",
        rating: 4.5,
        deliveryTime: "30-40",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Burger Bliss",
        cuisine: "American",
        rating: 4.3,
        deliveryTime: "25-35",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Sushi Supreme",
        cuisine: "Japanese",
        rating: 4.7,
        deliveryTime: "35-45",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Spice Route",
        cuisine: "Indian",
        rating: 4.4,
        deliveryTime: "40-50",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80"
    }
];

// Function to create restaurant cards
function createRestaurantCard(restaurant) {
    const stars = "★".repeat(Math.floor(restaurant.rating)) + "☆".repeat(5 - Math.floor(restaurant.rating));
    
    return `
        <div class="restaurant-card">
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-info">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.cuisine}</p>
                <div class="rating">${stars} ${restaurant.rating}</div>
                <p>${restaurant.deliveryTime} min delivery time</p>
            </div>
        </div>
    `;
}

// Populate restaurant grid
function populateRestaurants() {
    const restaurantGrid = document.getElementById('restaurantGrid');
    restaurantGrid.innerHTML = restaurants.map(restaurant => createRestaurantCard(restaurant)).join('');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const address = searchInput.value.trim();
    if (address) {
        alert(`Searching for restaurants near: ${address}`);
        // In a real application, this would trigger an API call to search for restaurants
    } else {
        alert('Please enter a delivery address');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateRestaurants();
});

// Add scroll effect for navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = 'white';
    }
});

// Cart functionality (basic)
const cartBtn = document.querySelector('.cart-btn');
cartBtn.addEventListener('click', () => {
    alert('Cart feature coming soon!');
});

// Login functionality (basic)
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
    alert('Login feature coming soon!');
});
