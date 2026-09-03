/* ==========================================================================
   BRISK TECH STORE - INTERACTIVE FRONTEND DEMO SCRIPT
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. ORIGINAL CONTACT FORM & NEWSLETTER VALIDATION (PRESERVED 100%)
   -------------------------------------------------------------------------- */

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = contactForm.querySelectorAll(".inputrequire");
        let isValid = true;

        // Remove old errors
        contactForm.querySelectorAll(".error-message").forEach(function (error) {
            error.remove();
        });

        inputs.forEach(function (input) {
            input.classList.remove("error-border");
        });

        // Check all inputs
        inputs.forEach(function (input) {
            if (input.value.trim() === "") {
                isValid = false;
                input.classList.add("error-border");

                const errorMessage = document.createElement("span");
                errorMessage.className = "error-message";
                errorMessage.textContent = "This field is required";
                input.parentElement.appendChild(errorMessage);
            }
        });

        // If any error
        if (!isValid) {
            setTimeout(function () {
                contactForm.querySelectorAll(".error-message").forEach(function (error) {
                    error.classList.add("hide");
                });

                inputs.forEach(function (input) {
                    input.classList.remove("error-border");
                });

                setTimeout(function () {
                    contactForm.querySelectorAll(".error-message").forEach(function (error) {
                        error.remove();
                    });
                }, 400);
            }, 3000);

            return;
        }

        // SUCCESS
        successMessage.textContent = "Message sent successfully!";
        successMessage.classList.add("show");
        contactForm.reset();

        showToast("Message sent successfully! Our team will contact you soon.", "bi-check-circle");

        // Remove after 3 seconds
        setTimeout(function () {
            successMessage.classList.remove("show");
            setTimeout(function () {
                successMessage.textContent = "";
            }, 400);
        }, 3000);
    });
}


/* NEWSLETTER SUBSCRIPTION */

function subscribeBTN() {
    const emailInput = document.getElementById("newsemailinput");
    const emailError = document.getElementById("emailError");
    const successMessage = document.getElementById("EmailsuccessMessage");

    if (!emailInput) return;

    // Clear old messages
    emailError.textContent = "";
    emailError.classList.remove("hide");

    successMessage.textContent = "";
    successMessage.classList.remove("show");

    emailInput.classList.remove("newsletter-error");

    // Empty email
    if (emailInput.value.trim() === "") {
        emailInput.classList.add("newsletter-error");
        emailError.textContent = "Email is required";

        setTimeout(function () {
            emailError.classList.add("hide");
            emailInput.classList.remove("newsletter-error");
            setTimeout(function () {
                emailError.textContent = "";
                emailError.classList.remove("hide");
            }, 400);
        }, 3000);

        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add("newsletter-error");
        emailError.textContent = "Please enter a valid email address";

        setTimeout(function () {
            emailError.classList.add("hide");
            emailInput.classList.remove("newsletter-error");
            setTimeout(function () {
                emailError.textContent = "";
                emailError.classList.remove("hide");
            }, 400);
        }, 3000);

        return;
    }

    // SUCCESS
    successMessage.textContent = "Successfully subscribed!";
    successMessage.classList.add("show");
    showToast("Subscribed to Brisk Newsletter successfully!", "bi-envelope-check");
    emailInput.value = "";

    // Remove after 3 seconds
    setTimeout(function () {
        successMessage.classList.remove("show");
        setTimeout(function () {
            successMessage.textContent = "";
        }, 400);
    }, 3000);
}

/* --------------------------------------------------------------------------
   2. MOCK PRODUCT CATALOG DATASET
   -------------------------------------------------------------------------- */

const PRODUCTS = [
    {
        id: 101,
        title: "Apple MacBook Pro 16\" M3 Max (36GB RAM, 1TB SSD)",
        category: "Mac Book",
        price: 12499,
        oldPrice: 13999,
        rating: 4.9,
        reviews: 142,
        badge: "Super Sale",
        badgeClass: "sale",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60",
        specs: "Apple M3 Max Chip | 16-inch Liquid Retina XDR | 36GB Unified Memory | 1TB Superfast SSD Storage"
    },
    {
        id: 102,
        title: "Apple MacBook Air 15\" M2 (8GB RAM, 256GB SSD) - Midnight",
        category: "Mac Book",
        price: 4599,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 98,
        badge: "Featured",
        badgeClass: "",
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60",
        specs: "Apple M2 Chip | 15.3-inch Liquid Retina Display | 8GB RAM | MagSafe 3 Charging"
    },
    {
        id: 103,
        title: "Dell XPS 15 9530 Intel Core i9 (32GB RAM, 1TB SSD, RTX 4060)",
        category: "Laptop & Computers",
        price: 8999,
        oldPrice: 9999,
        rating: 4.7,
        reviews: 64,
        badge: "Hot",
        badgeClass: "sale",
        img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60",
        specs: "13th Gen Intel Core i9 | 15.6\" OLED 3.5K Touch | NVIDIA GeForce RTX 4060 | CNC Aluminum Chassis"
    },
    {
        id: 104,
        title: "Lenovo ThinkPad X1 Carbon Gen 11 Intel Core i7 (Renewed Grade A)",
        category: "Laptop & Computers",
        price: 3499,
        oldPrice: 5299,
        rating: 4.9,
        reviews: 82,
        badge: "Renewed Grade A",
        badgeClass: "renewed",
        img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60",
        specs: "Certified Brisk Renewed | Intel Core i7-1365U | 16GB LPDDR5 | 512GB NVMe SSD | Ultralight Carbon Fiber"
    },
    {
        id: 105,
        title: "ASUS Chromebook CX9 Enterprise 14\" FHD Touch",
        category: "Chrome Book",
        price: 1899,
        oldPrice: 2299,
        rating: 4.5,
        reviews: 31,
        badge: "Eco-Smart",
        badgeClass: "",
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&auto=format&fit=crop&q=60",
        specs: "Intel Core i5 | ChromeOS | 8GB RAM | 256GB NVMe SSD | Up to 14 Hours Battery Life"
    },
    {
        id: 106,
        title: "Samsung Galaxy S24 Ultra 5G 512GB - Titanium Black",
        category: "Mobile",
        price: 4299,
        oldPrice: 5099,
        rating: 4.9,
        reviews: 215,
        badge: "Brisk Super Sale",
        badgeClass: "sale",
        img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&auto=format&fit=crop&q=60",
        specs: "Snapdragon 8 Gen 3 | 200MP Quad Camera with AI | 6.8\" AMOLED 120Hz | Built-in S-Pen"
    },
    {
        id: 107,
        title: "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
        category: "Mobile",
        price: 4699,
        oldPrice: 5099,
        rating: 4.9,
        reviews: 340,
        badge: "Top Seller",
        badgeClass: "",
        img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&auto=format&fit=crop&q=60",
        specs: "A17 Pro Chip | Aerospace-grade Titanium Design | Action Button | 5x Telephoto Optical Zoom"
    },
    {
        id: 108,
        title: "Apple iPad Pro 12.9\" M2 Wi-Fi 256GB - Space Gray",
        category: "Tablet & Ipad",
        price: 3999,
        oldPrice: 4499,
        rating: 4.8,
        reviews: 110,
        badge: "Best Seller",
        badgeClass: "",
        img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60",
        specs: "Apple M2 Chip | Liquid Retina XDR display with ProMotion | Supports Apple Pencil 2 & Magic Keyboard"
    },
    {
        id: 109,
        title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
        category: "Accessories",
        price: 1199,
        oldPrice: 1499,
        rating: 4.9,
        reviews: 185,
        badge: "Super Sale",
        badgeClass: "sale",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
        specs: "Industry-Leading Active Noise Canceling | Auto NC Optimizer | 30 Hours Battery | Crystal Clear Hands-Free Calls"
    },
    {
        id: 110,
        title: "Anker 737 Power Bank (PowerCore 24K 140W Output)",
        category: "Accessories",
        price: 499,
        oldPrice: 649,
        rating: 4.8,
        reviews: 92,
        badge: "Must Have",
        badgeClass: "",
        img: "https://images.unsplash.com/photo-1609592424074-8eb7813a36db?w=500&auto=format&fit=crop&q=60",
        specs: "24,000mAh Capacity | 140W Ultra-Powerful Charging | Smart Digital Display | Charge Laptops & Phones Simultaneously"
    },
    {
        id: 111,
        title: "Apple MacBook Air 13\" M1 (Renewed Grade A+)",
        category: "Mac Book",
        price: 2499,
        oldPrice: 3699,
        rating: 4.9,
        reviews: 154,
        badge: "Renewed Grade A",
        badgeClass: "renewed",
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60",
        specs: "Brisk Certified 1-Year Warranty | Apple M1 Chip | 8GB RAM | 256GB SSD | Silent Fanless Design"
    },
    {
        id: 112,
        title: "Logitech MX Master 3S Wireless Performance Mouse",
        category: "Accessories",
        price: 389,
        oldPrice: 449,
        rating: 4.9,
        reviews: 230,
        badge: "Top Rated",
        badgeClass: "",
        img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
        specs: "8K DPI Any-Surface Tracking | Quiet Clicks | MagSpeed Electromagnetic Scroll | Ergonomic Design"
    }
];

/* --------------------------------------------------------------------------
   3. APP STATE MANAGEMENT
   -------------------------------------------------------------------------- */

let currentView = "contact"; // 'contact', 'shop', 'about', 'faq'
let currentCategoryFilter = "All Catogories";
let cart = []; // [{ id, title, price, img, qty }]
let wishlist = []; // [ id1, id2, ... ]

/* --------------------------------------------------------------------------
   4. NAVIGATION & VIEW SWITCHING ENGINE
   -------------------------------------------------------------------------- */

function switchView(viewName) {
    currentView = viewName;

    // Hide all views
    document.querySelectorAll(".view-container").forEach(el => {
        el.classList.remove("active-view");
    });

    // Show target view
    const targetEl = document.getElementById(viewName + "View");
    if (targetEl) {
        targetEl.classList.add("active-view");
    }

    // Update Headings
    const headingEl = document.getElementById("pageHeading");
    if (headingEl) {
        if (viewName === "contact") headingEl.textContent = "Contact Us";
        else if (viewName === "shop") headingEl.textContent = "Brisk Products Catalog";
        else if (viewName === "about") headingEl.textContent = "About Brisk Industries";
        else if (viewName === "faq") headingEl.textContent = "Frequently Asked Questions";
    }

    // Update Scroll bar active link state
    document.querySelectorAll("#scrollBar a").forEach(link => {
        link.classList.remove("active-link");
        if (viewName === "contact" && link.dataset.page === "contact") {
            link.classList.add("active-link");
        }
    });

    // If switching to shop, render products
    if (viewName === "shop") {
        renderProducts();
    }

    window.scrollTo({ top: 300, behavior: 'smooth' });
}

function filterCategoryNav(categoryName) {
    currentCategoryFilter = categoryName;

    // Update Select Dropdown in container-two
    const catSelect = document.getElementById("categorySelect");
    if (catSelect) {
        catSelect.value = categoryName === "Renewed" ? "All Catogories" : categoryName;
    }

    // Update Scroll bar visual active link
    document.querySelectorAll("#scrollBar a").forEach(link => {
        link.classList.remove("active-link");
        if (link.dataset.category === categoryName) {
            link.classList.add("active-link");
        }
    });

    // Switch view to shop
    switchView("shop");

    // Update filter pills inside shop view
    document.querySelectorAll("#categoryPills .filter-pill").forEach(pill => {
        pill.classList.remove("active");
        if (pill.getAttribute("onclick") && pill.getAttribute("onclick").includes(categoryName)) {
            pill.classList.add("active");
        }
    });
}

function handleCategoryDropdown(val) {
    filterCategoryNav(val);
}

function filterCategoryPill(categoryName, btnElement) {
    currentCategoryFilter = categoryName;
    document.querySelectorAll("#categoryPills .filter-pill").forEach(p => p.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");

    renderProducts();
}

/* --------------------------------------------------------------------------
   5. PRODUCT RENDER ENGINE
   -------------------------------------------------------------------------- */

function renderProducts() {
    const grid = document.getElementById("productGrid");
    const sortVal = document.getElementById("sortSelect") ? document.getElementById("sortSelect").value : "featured";
    const searchQuery = (document.getElementById("searchInput") ? document.getElementById("searchInput").value : "").toLowerCase().trim();

    if (!grid) return;

    // Filter products
    let filtered = PRODUCTS.filter(p => {
        let matchCat = true;
        if (currentCategoryFilter === "Renewed") {
            matchCat = p.badgeClass === "renewed" || p.title.toLowerCase().includes("renewed");
        } else if (currentCategoryFilter === "Brisk Super Sale") {
            matchCat = p.badgeClass === "sale" || p.badge === "Super Sale" || p.badge === "Brisk Super Sale";
        } else if (currentCategoryFilter !== "All Catogories") {
            matchCat = p.category === currentCategoryFilter;
        }

        let matchSearch = true;
        if (searchQuery) {
            matchSearch = p.title.toLowerCase().includes(searchQuery) ||
                          p.category.toLowerCase().includes(searchQuery) ||
                          p.specs.toLowerCase().includes(searchQuery);
        }

        return matchCat && matchSearch;
    });

    // Sort products
    if (sortVal === "price-low") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "price-high") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;" class="empty-state">
                <i class="bi bi-search" style="font-size: 3rem; color: #cbd5e1;"></i>
                <h3 style="color: #112f55; margin-top: 1rem;">No Products Found</h3>
                <p style="color: #64748b;">Try adjusting your category filter or search keywords.</p>
                <button class="modal-btn" onclick="filterCategoryPill('All Catogories', null)" style="margin-top: 1rem;">Reset Filters</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const isWish = wishlist.includes(p.id);
        const badgeHTML = p.badge ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : "";

        return `
            <div class="product-card">
                ${badgeHTML}
                <button class="product-wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})">
                    <i class="bi ${isWish ? 'bi-heart-fill' : 'bi-heart'}"></i>
                </button>
                <div class="product-img-box clickable" onclick="openQuickView(${p.id})">
                    <img src="${p.img}" alt="${p.title}" loading="lazy">
                </div>
                <div class="product-details">
                    <span class="product-category">${p.category}</span>
                    <h4 class="product-title clickable" onclick="openQuickView(${p.id})">${p.title}</h4>
                    <div class="product-rating">
                        <i class="bi bi-star-fill"></i>
                        <strong>${p.rating}</strong>
                        <span>(${p.reviews} reviews)</span>
                    </div>
                    <div class="product-price-row">
                        <span class="current-price">AED ${p.price.toLocaleString()}</span>
                        ${p.oldPrice ? `<span class="old-price">AED ${p.oldPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-cart-btn" onclick="addToCart(${p.id})">
                            <i class="bi bi-cart-plus"></i> Add to Cart
                        </button>
                        <button class="quick-view-btn" onclick="openQuickView(${p.id})" title="Quick View">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/* --------------------------------------------------------------------------
   6. SEARCH ENGINE
   -------------------------------------------------------------------------- */

function searchBTN() {
    const input = document.getElementById("searchInput");
    if (input && input.value.trim() !== "") {
        switchView("shop");
        renderProducts();
        showToast(`Showing search results for "${input.value.trim()}"`, "bi-search");
    } else {
        showToast("Please enter a keyword to search", "bi-exclamation-circle");
    }
}

function handleSearchKeyup(event) {
    if (event.key === "Enter") {
        searchBTN();
    } else if (currentView === "shop") {
        renderProducts();
    }
}

/* --------------------------------------------------------------------------
   7. CART & WISHLIST DRAWER LOGIC
   -------------------------------------------------------------------------- */

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            qty: 1
        });
    }

    updateBadges();
    showToast(`Added 1x "${product.title}" to Cart!`, "bi-bag-check");
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateBadges();
    renderCartDrawer();
    showToast("Item removed from cart.", "bi-trash");
}

function updateCartQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            updateBadges();
            renderCartDrawer();
        }
    }
}

function toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`Removed "${product.title}" from Wishlist.`, "bi-heartbreak");
    } else {
        wishlist.push(productId);
        showToast(`Saved "${product.title}" to Wishlist!`, "bi-heart-fill");
    }

    updateBadges();
    if (currentView === "shop") renderProducts();
    renderWishlistDrawer();
}

function updateBadges() {
    const cartBadge = document.getElementById("cartBadge");
    const wishlistBadge = document.getElementById("wishlistBadge");

    const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    if (cartBadge) cartBadge.textContent = totalCartCount;
    if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
}

function renderCartDrawer() {
    const body = document.getElementById("cartDrawerBody");
    const totalEl = document.getElementById("cartTotalAmount");

    if (!body) return;

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-cart-x"></i>
                <p style="font-weight: 600; color: #112f55;">Your Shopping Cart is Empty</p>
                <p style="font-size: 0.85rem;">Browse our catalog and add your favorite tech products.</p>
                <button class="modal-btn" onclick="closeAllDrawers(); switchView('shop');" style="margin-top: 1rem;">Shop Now</button>
            </div>
        `;
        if (totalEl) totalEl.textContent = "AED 0.00";
        return;
    }

    let total = 0;
    body.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;

        return `
            <div class="drawer-item">
                <img src="${item.img}" alt="${item.title}">
                <div class="drawer-item-info">
                    <div class="drawer-item-title">${item.title}</div>
                    <div class="drawer-item-price">AED ${item.price.toLocaleString()}</div>
                    <div class="qty-controls">
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span class="qty-count">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${item.id})" title="Remove">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    if (totalEl) totalEl.textContent = `AED ${total.toLocaleString()}`;
}

function renderWishlistDrawer() {
    const body = document.getElementById("wishlistDrawerBody");
    if (!body) return;

    if (wishlist.length === 0) {
        body.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-heart"></i>
                <p style="font-weight: 600; color: #112f55;">Your Wishlist is Empty</p>
                <p style="font-size: 0.85rem;">Click the heart icon on any product to save it here for later.</p>
            </div>
        `;
        return;
    }

    const items = PRODUCTS.filter(p => wishlist.includes(p.id));

    body.innerHTML = items.map(item => {
        return `
            <div class="drawer-item">
                <img src="${item.img}" alt="${item.title}">
                <div class="drawer-item-info">
                    <div class="drawer-item-title">${item.title}</div>
                    <div class="drawer-item-price">AED ${item.price.toLocaleString()}</div>
                    <button class="add-cart-btn" onclick="addToCart(${item.id})" style="padding: 0.3rem 0.6rem; font-size: 0.75rem; margin-top: 0.3rem;">
                        <i class="bi bi-cart-plus"></i> Add to Cart
                    </button>
                </div>
                <button class="remove-item-btn" onclick="toggleWishlist(${item.id})" title="Remove">
                    <i class="bi bi-x-circle"></i>
                </button>
            </div>
        `;
    }).join('');
}

function openCartDrawer() {
    renderCartDrawer();
    document.getElementById("drawerBackdrop").classList.add("open");
    document.getElementById("cartDrawer").classList.add("open");
}

function openWishlistDrawer() {
    renderWishlistDrawer();
    document.getElementById("drawerBackdrop").classList.add("open");
    document.getElementById("wishlistDrawer").classList.add("open");
}

function closeAllDrawers() {
    document.getElementById("drawerBackdrop").classList.remove("open");
    document.querySelectorAll(".drawer").forEach(d => d.classList.remove("open"));
}

/* --------------------------------------------------------------------------
   8. MODAL HANDLERS & POLICY VIEWER
   -------------------------------------------------------------------------- */

function openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add("open");
}

function closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove("open");
}

function openPolicyModal(type) {
    const titleEl = document.getElementById("policyModalTitle");
    const bodyEl = document.getElementById("policyModalBody");

    const POLICIES = {
        cancellation: {
            title: "Order Cancellation Policy",
            content: `
                <h4>1. Order Cancellation Window</h4>
                <p>Orders can be cancelled free of charge within 2 hours of placement before dispatched for shipment.</p>
                <h4>2. Processing & Refund Timeframe</h4>
                <p>Upon successful cancellation, full refund will be credited back to your original payment method within 3 to 5 business days.</p>
                <h4>3. Shipped Orders</h4>
                <p>If your package has already been handed over to UAE courier partners, please follow our standard 14-day return protocol upon arrival.</p>
            `
        },
        delivery: {
            title: "Express Delivery Policy",
            content: `
                <h4>1. Free Delivery Threshold</h4>
                <p>All orders above <strong>AED 200</strong> qualify for FREE express courier delivery across Dubai, Abu Dhabi, Sharjah, Ajman, and Ras Al Khaimah.</p>
                <h4>2. Same-Day Delivery</h4>
                <p>Orders placed before 12:00 PM GST are eligible for same-day evening delivery within Dubai municipal city limits.</p>
                <h4>3. Tracking & Inspection</h4>
                <p>Every shipment comes with live SMS and WhatsApp tracking. Recipients are encouraged to inspect package condition upon arrival.</p>
            `
        },
        emi: {
            title: "EMI & Flexible Payment Terms",
            content: `
                <h4>1. 0% Interest Installments</h4>
                <p>Split your purchase into 4 equal monthly interest-free payments using Tabby or Tamara at checkout.</p>
                <h4>2. Major Bank Credit Cards</h4>
                <p>Enjoy 3, 6, and 12-month installment plans with Emirates NBD, ADCB, Mashreq, and FAB credit cards.</p>
            `
        },
        privacy: {
            title: "Privacy & Data Protection Policy",
            content: `
                <h4>1. Secure Encryption</h4>
                <p>Brisk uses industry-grade 256-bit SSL encryption to safeguard customer personal details and transaction data.</p>
                <h4>2. Data Usage Guarantee</h4>
                <p>We strictly never sell or share your phone number, email address, or payment details with third-party advertising brokers.</p>
            `
        },
        refund: {
            title: "14-Day Return & Refund Policy",
            content: `
                <h4>1. Hassle-Free Returns</h4>
                <p>Unopened items in original condition can be returned within 14 calendar days of delivery for a 100% full refund.</p>
                <h4>2. Free Pickup Service</h4>
                <p>Brisk offers complimentary courier pick-up for eligible return requests across the UAE.</p>
            `
        },
        warranty: {
            title: "Brisk Official Warranty Policy",
            content: `
                <h4>1. Brand New Products</h4>
                <p>Covered by standard 1-Year or 2-Year official manufacturer brand warranty across authorized UAE service centers.</p>
                <h4>2. Brisk Certified Renewed Devices</h4>
                <p>Every renewed laptop, mobile, or tablet includes an exclusive <strong>1-Year Comprehensive Brisk Store Warranty</strong> covering hardware defaults.</p>
            `
        },
        terms: {
            title: "Terms & Conditions of Service",
            content: `
                <h4>1. Overview</h4>
                <p>By accessing and placing orders on Brisk Tech Store, you agree to adhere to our standard sales, shipping, and electronic commerce guidelines.</p>
                <h4>2. Pricing Transparency</h4>
                <p>All prices listed on our portal are inclusive of 5% UAE VAT unless otherwise explicitly indicated.</p>
            `
        }
    };

    const policy = POLICIES[type] || POLICIES.terms;
    if (titleEl) titleEl.textContent = policy.title;
    if (bodyEl) bodyEl.innerHTML = policy.content;

    openModal("policyModal");
}

function openLoyaltyModal() {
    showToast("Brisk Rewards Loyalty Club: Earn 1 Points for every 10 AED spent!", "bi-star");
}

function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const titleEl = document.getElementById("quickViewTitle");
    const bodyEl = document.getElementById("quickViewBody");
    const isWish = wishlist.includes(product.id);

    if (titleEl) titleEl.textContent = product.title;
    if (bodyEl) {
        bodyEl.innerHTML = `
            <div class="quick-view-grid">
                <img src="${product.img}" alt="${product.title}" class="quick-view-img">
                <div style="display: flex; flex-direction: column;">
                    <span style="font-size: 0.8rem; color: #64748b; font-weight: 600; text-transform: uppercase;">${product.category}</span>
                    <h3 style="color: #112f55; margin: 0.3rem 0; font-size: 1.1rem; font-weight: 700;">${product.title}</h3>
                    <div class="product-rating" style="margin-bottom: 0.8rem;">
                        <i class="bi bi-star-fill"></i> <strong>${product.rating}</strong> <span>(${product.reviews} customer reviews)</span>
                    </div>
                    <div style="font-size: 1.4rem; font-weight: 800; color: #112f55; margin-bottom: 0.8rem;">
                        AED ${product.price.toLocaleString()}
                        ${product.oldPrice ? `<span style="font-size: 0.9rem; color: #94a3b8; text-decoration: line-through; margin-left: 0.5rem;">AED ${product.oldPrice.toLocaleString()}</span>` : ''}
                    </div>
                    <p style="font-size: 0.85rem; color: #475569; line-height: 1.5; margin-bottom: 1.2rem; background: #f8fafc; padding: 0.8rem; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
                        ${product.specs}
                    </p>
                    <div style="display: flex; gap: 0.5rem; margin-top: auto;">
                        <button class="add-cart-btn" onclick="addToCart(${product.id}); closeModal('quickViewModal');" style="padding: 0.7rem 1.2rem;">
                            <i class="bi bi-cart-plus"></i> Add to Shopping Cart
                        </button>
                        <button class="product-wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(${product.id})" style="position: static; width: 44px; height: 44px;">
                            <i class="bi ${isWish ? 'bi-heart-fill' : 'bi-heart'}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    openModal("quickViewModal");
}

/* --------------------------------------------------------------------------
   9. INTERACTIVE ACTION HANDLERS
   -------------------------------------------------------------------------- */

function processCheckout() {
    if (cart.length === 0) {
        showToast("Your cart is empty! Add products first.", "bi-exclamation-circle");
        return;
    }

    const orderRef = "BRK-" + Math.floor(10000 + Math.random() * 90000);
    closeAllDrawers();

    showToast(`Order #${orderRef} Placed Successfully! Thank you for shopping with Brisk.`, "bi-check2-circle");

    // Clear Cart
    cart = [];
    updateBadges();

    // Auto open Track Modal for demonstration
    setTimeout(() => {
        const trackInput = document.getElementById("trackOrderId");
        if (trackInput) trackInput.value = orderRef;
        openModal("trackModal");
    }, 1200);
}

function handleAccountLogin(event) {
    event.preventDefault();
    closeModal("accountModal");
    showToast("Welcome back to Brisk Account Portal!", "bi-person-check");
}

function handleTrackOrder(event) {
    event.preventDefault();
    const idInput = document.getElementById("trackOrderId");
    const resultBox = document.getElementById("trackResultBox");

    const idVal = idInput ? idInput.value.trim() : "BRK-88492";

    if (resultBox) {
        resultBox.style.display = "block";
        resultBox.innerHTML = `
            <div style="font-size: 0.9rem; font-weight: 700; color: #112f55;">
                <i class="bi bi-box-seam" style="color: #ffa500;"></i> Order Status for #${idVal}
            </div>
            <div style="margin-top: 0.5rem; font-size: 0.85rem; color: #475569; line-height: 1.6;">
                <p><strong>Courier:</strong> Aramex Express Courier</p>
                <p><strong>Current Location:</strong> Dubai Central Sorting Facility</p>
                <p><strong>Estimated Delivery:</strong> Tomorrow by 3:00 PM GST</p>
                <p style="color: green; font-weight: 600; margin-top: 0.3rem;"><i class="bi bi-check-circle-fill"></i> On Schedule - Package Dispatched</p>
            </div>
        `;
    }
}

function handleCountryChange(val) {
    if (!val) return;

    const countries = {
        AE: "United Arab Emirates (AED)",
        IN: "India (INR ₹)",
        US: "United States (USD $)",
        UK: "United Kingdom (GBP £)",
        CA: "Canada (CAD $)",
        AU: "Australia (AUD $)",
        DE: "Germany (EUR €)",
        FR: "France (EUR €)",
        JP: "Japan (JPY ¥)",
        SG: "Singapore (SGD $)"
    };

    const label = countries[val] || "Selected Country";
    showToast(`Currency updated for ${label}`, "bi-globe");
}

function copySupportInfo(text, typeName) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`${typeName} (${text}) copied to clipboard!`, "bi-clipboard-check");
    }).catch(() => {
        showToast(`Contact: ${text}`, "bi-telephone");
    });
}

function toggleAccordion(headerEl) {
    const item = headerEl.parentElement;
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

    if (!isActive) {
        item.classList.add("active");
    }
}

function filterFAQ(query) {
    const q = query.toLowerCase().trim();
    document.querySelectorAll("#faqAccordion .accordion-item").forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(q)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

/* --------------------------------------------------------------------------
   10. TOAST NOTIFICATION UTILITY
   -------------------------------------------------------------------------- */

function showToast(message, iconClass = "bi-info-circle") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <i class="bi ${iconClass}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = "toastOut 0.3s ease forwards";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}

/* --------------------------------------------------------------------------
   11. INITIALIZATION ON DOM CONTENT LOADED
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    // Bind Logo click -> Return to Contact / Shop
    const logoBtn = document.getElementById("logoBtn");
    if (logoBtn) {
        logoBtn.addEventListener("click", function () {
            switchView("contact");
        });
    }

    // Bind Header Icon Nav buttons
    const cartNavBtn = document.getElementById("cartNavBtn");
    if (cartNavBtn) {
        cartNavBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openCartDrawer();
        });
    }

    const wishlistNavBtn = document.getElementById("wishlistNavBtn");
    if (wishlistNavBtn) {
        wishlistNavBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openWishlistDrawer();
        });
    }

    const accountNavBtn = document.getElementById("accountNavBtn");
    if (accountNavBtn) {
        accountNavBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openModal("accountModal");
        });
    }

    const ticketNavBtn = document.getElementById("ticketNavBtn");
    if (ticketNavBtn) {
        ticketNavBtn.addEventListener("click", function (e) {
            e.preventDefault();
            openModal("trackModal");
        });
    }

    // Render initial catalog products behind the scene
    renderProducts();
    updateBadges();
});