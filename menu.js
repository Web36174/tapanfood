// Menu items data
const menuItems = [
    {
        name: "Classic Burger",
        category: "main",
        price: 12.99,
        description: "Juicy beef patty with fresh vegetables and special sauce",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Margherita Pizza",
        category: "main",
        price: 14.99,
        description: "Fresh tomatoes, mozzarella, and basil",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Caesar Salad",
        category: "starters",
        price: 8.99,
        description: "Crispy romaine lettuce with parmesan and croutons",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Chocolate Brownie",
        category: "desserts",
        price: 6.99,
        description: "Warm chocolate brownie with vanilla ice cream",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Mango Smoothie",
        category: "drinks",
        price: 4.99,
        description: "Fresh mango blended with yogurt",
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Garlic Bread",
        category: "starters",
        price: 5.99,
        description: "Crispy bread with garlic butter and herbs",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=500&q=80"
    }
];

// Function to create menu item card
function createMenuCard(item) {
    return `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-price">$${item.price.toFixed(2)}</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to filter menu items
function filterMenuItems(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            // Add animation
            item.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize the menu page
document.addEventListener('DOMContentLoaded', () => {
    // Populate menu items
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = menuItems.map(item => createMenuCard(item)).join('');

    // Add click handlers for category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter menu items
            filterMenuItems(button.dataset.category);
        });
    });

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            const itemName = menuItem.querySelector('h3').textContent;
            
            // Add animation effect
            button.innerHTML = '✓ Added';
            button.style.backgroundColor = '#2ecc71';
            
            setTimeout(() => {
                button.innerHTML = 'Add to Cart';
                button.style.backgroundColor = '';
            }, 1500);
            
            // Here you would typically add the item to a cart object
            console.log(`Added ${itemName} to cart`);
        });
    });
});

// Add some smooth animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
