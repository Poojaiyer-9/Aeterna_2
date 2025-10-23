// Product Data
const products = {
    men: [
        { 
            id: 1, 
            name: "Midnight Essence", 
            price: 7999, 
            image: "fragrance1_1760546447923.png", 
            category: "nightfall-elixirs",
            categoryDisplay: "Nightfall Elixirs",
            gender: "men"
        },
        { 
            id: 2, 
            name: "Golden Oud", 
            price: 15999, 
            image: "fragrance2_1760546447924.png", 
            category: "most-celebrated",
            categoryDisplay: "Most Celebrated",
            gender: "men"
        },
        { 
            id: 3, 
            name: "Urban Legend", 
            price: 5999, 
            image: "menimage_1760546447927.png", 
            category: "new-in",
            categoryDisplay: "New In",
            gender: "men"
        },
        { 
            id: 4, 
            name: "Desert Storm", 
            price: 11999, 
            image: "set1_1760546447929.png", 
            category: "limited-edit",
            categoryDisplay: "The Limited Edit",
            gender: "men"
        },
        { 
            id: 5, 
            name: "Noir Intensity", 
            price: 8999, 
            image: "fragrance1_1760546447923.png", 
            category: "nightfall-elixirs",
            categoryDisplay: "Nightfall Elixirs",
            gender: "men"
        },
        { 
            id: 6, 
            name: "Imperial Musk", 
            price: 13999, 
            image: "fragrance2_1760546447924.png", 
            category: "most-celebrated",
            categoryDisplay: "Most Celebrated",
            gender: "men"
        },
    ],
    women: [
        { 
            id: 7, 
            name: "Rose Garden", 
            price: 6999, 
            image: "fragrancewomen1_1760546447925.png", 
            category: "new-in",
            categoryDisplay: "New In",
            gender: "women"
        },
        { 
            id: 8, 
            name: "Lavender Dreams", 
            price: 7999, 
            image: "fw2_1760546447925.png", 
            category: "nightfall-elixirs",
            categoryDisplay: "Nightfall Elixirs",
            gender: "women"
        },
        { 
            id: 9, 
            name: "Crystal Bloom", 
            price: 13999, 
            image: "fw3_1760546447926.png", 
            category: "limited-edit",
            categoryDisplay: "The Limited Edit",
            gender: "women"
        },
        { 
            id: 10, 
            name: "Eternal Grace", 
            price: 10999, 
            image: "women_1760546447931.jpg", 
            category: "most-celebrated",
            categoryDisplay: "Most Celebrated",
            gender: "women"
        },
        { 
            id: 11, 
            name: "Velvet Petals", 
            price: 8999, 
            image: "set2_1760546447930.png", 
            category: "new-in",
            categoryDisplay: "New In",
            gender: "women"
        },
        { 
            id: 12, 
            name: "Moonlight Jasmine", 
            price: 11999, 
            image: "fragrancewomen1_1760546447925.png", 
            category: "most-celebrated",
            categoryDisplay: "Most Celebrated",
            gender: "women"
        },
    ]
};

// State
let currentPage = 'home';
let currentFilter = { men: 'all', women: 'all' };

// Navigation
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Load page content
        if (page === 'men') {
            renderProducts('men', currentFilter.men);
        } else if (page === 'women') {
            renderProducts('women', currentFilter.women);
        } else if (page === 'admin') {
            renderAdminProducts();
        }
    }
    
    // Close mobile menu
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
    }
}

// Hash navigation
function handleHashChange() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash.split('?')[1]);
    const page = hash.split('?')[0] || 'home';
    const category = params.get('category');
    
    if (page === 'men' && category) {
        currentFilter.men = category;
    } else if (page === 'women' && category) {
        currentFilter.women = category;
    }
    
    navigateTo(page);
}

// Render products
function renderProducts(gender, filter = 'all') {
    const container = document.getElementById(`${gender}Products`);
    if (!container) return;
    
    let productList = products[gender];
    
    // Filter products
    if (filter !== 'all') {
        productList = productList.filter(p => p.category === filter);
    }
    
    // Sort to show filtered category first
    if (filter !== 'all') {
        productList.sort((a, b) => {
            if (a.category === filter && b.category !== filter) return -1;
            if (a.category !== filter && b.category === filter) return 1;
            return 0;
        });
    }
    
    container.innerHTML = productList.map(product => `
        <div class="product-card" data-testid="product-card-${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name" data-testid="text-product-name-${product.id}">${product.name}</h3>
                <p class="product-category" data-testid="text-category-${product.id}">${product.categoryDisplay}</p>
                <div class="product-footer">
                    <p class="product-price" data-testid="text-price-${product.id}">₹${product.price}</p>
                    <div class="product-actions">
                        <button data-testid="button-add-to-cart-${product.id}" title="Add to cart">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter products
function setupFilters(gender) {
    const filterContainer = document.getElementById(`${gender}Filters`);
    if (!filterContainer) return;
    
    const buttons = filterContainer.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter products
            const filter = btn.dataset.filter;
            currentFilter[gender] = filter;
            renderProducts(gender, filter);
        });
    });
}

// Render admin products
function renderAdminProducts() {
    const container = document.getElementById('adminProducts');
    if (!container) return;
    
    const allProducts = [...products.men, ...products.women];
    
    container.innerHTML = allProducts.map(product => `
        <div class="admin-product-item" data-testid="product-item-${product.id}">
            <div>
                <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.125rem; font-weight: 300;">${product.name}</h3>
                <p style="font-size: 0.875rem; color: var(--muted-foreground);">${product.categoryDisplay} - ${product.gender === 'men' ? 'Men' : 'Women'}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 2rem;">
                <div style="text-align: right;">
                    <p style="font-weight: 300; color: var(--primary);">$${product.price}</p>
                </div>
                <div class="admin-product-actions">
                    <button onclick="editProduct(${product.id})" data-testid="button-edit-${product.id}" title="Edit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button onclick="deleteProduct(${product.id})" data-testid="button-delete-${product.id}" title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Admin functions
function editProduct(id) {
    console.log(`Edit product ${id} triggered`);
    showToast('Product Updated', 'Product information has been updated.');
}

function deleteProduct(id) {
    console.log(`Delete product ${id} triggered`);
    showToast('Product Deleted', 'Product has been removed from the catalog.');
}

function showToast(title, message) {
    // Simple toast notification
    alert(`${title}\n\n${message}`);
}

// Admin tabs
function setupAdminTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Update button states
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update panel states
            tabPanels.forEach(panel => panel.classList.remove('active'));
            const targetPanel = document.getElementById(`${tabName}-tab`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// Handle form submission
function setupAdminForm() {
    const form = document.getElementById('addProductForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;
        const category = document.getElementById('productCategory').value;
        const gender = document.getElementById('productGender').value;
        const description = document.getElementById('productDescription').value;
        const image = document.getElementById('productImage').value;
        
        console.log('Add product triggered:', { name, price, category, gender, description, image });
        
        showToast('Product Added', 'New product has been successfully added to the catalog.');
        
        // Reset form
        form.reset();
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }
}

// Category card navigation
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            const gender = card.dataset.gender;
            
            // Navigate to the appropriate page with category filter
            currentFilter[gender] = category;
            window.location.hash = `${gender}?category=${category}`;
        });
    });
}

// Setup navigation links
function setupNavLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const hash = link.getAttribute('href');
            window.location.hash = hash;
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aeterna website initialized');
    
    // Setup event listeners
    setupMobileMenu();
    setupCategoryCards();
    setupNavLinks();
    setupFilters('men');
    setupFilters('women');
    setupAdminTabs();
    setupAdminForm();
    
    // Handle initial navigation
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
});
