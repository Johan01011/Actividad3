// Datos de productos (ampliados)
const products = [
    {
        id: 1,
        title: "Smartphone X1 Pro",
        price: 2999999,
        description: "El último smartphone con cámara de 108MP y pantalla AMOLED de 120Hz.",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Laptop Ultra Slim",
        price: 4599999,
        description: "Laptop ultradelgada con procesador i7 y 16GB de RAM.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Auriculares Inalámbricos",
        price: 699999,
        description: "Auriculares con cancelación de ruido y 30h de batería.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Smartwatch Pro",
        price: 899999,
        description: "Monitoriza tu salud y actividad física con este smartwatch avanzado.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Cámara DSLR Profesional",
        price: 3199999,
        description: "Captura momentos increíbles con esta cámara de 24MP.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Altavoz Bluetooth",
        price: 459999,
        description: "Altavoz portátil con sonido envolvente y 20h de duración.",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Tablet 10.5\"",
        price: 1299999,
        description: "Tablet con pantalla Full HD y lápiz óptico incluido.",
        image: "https://http2.mlstatic.com/D_NQ_NP_751432-CBT81686223781_122024-O.webp"
    },
    {
        id: 8,
        title: "Monitor 4K 27\"",
        price: 1499999,
        description: "Monitor profesional con resolución 4K y colores precisos.",
        image: "https://www.lg.com/content/dam/channel/wcms/co/images/monitores/27us500-w/gallery/ultrafine-27us500-gallery-01-2010.jpg/_jcr_content/renditions/thum-1600x1062.jpeg"
    },
    {
        id: 9,
        title: "Teclado Mecánico RGB",
        price: 399999,
        description: "Teclado mecánico con retroiluminación RGB y switches Cherry MX.",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        title: "Mouse Gamer",
        price: 299999,
        description: "Mouse de alta precisión con 8 botones programables.",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        title: "Disco Duro Externo 2TB",
        price: 499999,
        description: "Almacenamiento portátil con conexión USB 3.0.",
        image: "https://http2.mlstatic.com/D_NQ_NP_846900-MLA51065021250_082022-O.webp"
    },
    {
        id: 12,
        title: "Router WiFi 6",
        price: 799999,
        description: "Router de última generación con cobertura para toda la casa.",
        image: "https://http2.mlstatic.com/D_NQ_NP_758795-MLA81070619773_112024-O.webp"
    },
    {
        id: 13,
        title: "Impresora Multifuncional",
        price: 899999,
        description: "Imprime, escanea y copia con esta impresora todo en uno.",
        image: "https://http2.mlstatic.com/D_NQ_NP_737010-MLU72349988928_102023-O.webp"
    },
    {
        id: 14,
        title: "Tarjeta Gráfica RTX 3080",
        price: 5999999,
        description: "Potencia tu PC para gaming con esta tarjeta gráfica de última generación.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 15,
        title: "PS5",
        price: 2499999,
        description: "La última consola con gráficos 4K y 1TB de almacenamiento.",
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 16,
        title: "Drone Profesional 4K",
        price: 1999999,
        description: "Drone con cámara 4K y 30 minutos de autonomía.",
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

// Carrito
let cart = [];

// Variables de paginación
const productsPerPage = 8;
let currentPage = 1;

// Elementos del DOM
const productGrid = document.getElementById('product-grid');
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const clearCartBtn = document.getElementById('clear-cart');
const loadMoreBtn = document.getElementById('load-more');

// Formatear precio en pesos colombianos
function formatPrice(price) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(price);
}

// Cargar productos con paginación
function loadProducts(page = 1) {
    currentPage = page;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products.slice(0, endIndex);
    
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Añadir al Carrito</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Mostrar u ocultar botón "Ver más"
    if (endIndex >= products.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    // Event listeners para botones "Añadir al carrito"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Añadir al carrito
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    
    // Animación de confirmación
    e.target.textContent = '✓ Añadido';
    e.target.style.backgroundColor = '#2ecc71';
    setTimeout(() => {
        e.target.textContent = 'Añadir al Carrito';
        e.target.style.backgroundColor = '';
    }, 1000);
}

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    
    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.title}</h3>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <p class="cart-item-price">${formatPrice(item.price * item.quantity)}</p>
                    <button class="cart-item-remove" data-id="${item.id}">Eliminar</button>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }
    
    cartTotal.textContent = `Total: ${formatPrice(total)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Event listeners para botones de cantidad y eliminar
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
        button.addEventListener('click', removeFromCart);
    });
}

// Aumentar cantidad en carrito
function increaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

// Disminuir cantidad en carrito
function decreaseQuantity(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    }
}
// Función de búsqueda
function searchProducts(query) {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return products;
    
    return products.filter(product => 
        product.title.toLowerCase().startsWith(normalizedQuery)
    );
}

// Event listener para la búsqueda
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    const results = searchProducts(query);
    displaySearchResults(results);
});

// Event listener para búsqueda al presionar Enter
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = document.getElementById('search-input').value;
        const results = searchProducts(query);
        displaySearchResults(results);
    }
});

// Mostrar resultados de búsqueda
function displaySearchResults(results) {
    productGrid.innerHTML = '';
    
    if (results.length === 0) {
        productGrid.innerHTML = '<p class="no-results">No se encontraron productos</p>';
        return;
    }
    
    results.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Mostrar precio con descuento si aplica
        let priceHTML = `<p class="product-price">${formatPrice(product.price)}</p>`;
        if (product.discount && product.originalPrice) {
            const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100);
            priceHTML = `
                <p class="product-price">
                    <span class="original-price">${formatPrice(product.originalPrice)}</span>
                    ${formatPrice(product.price)}
                    <span class="discount-badge">-${discountPercent}%</span>
                </p>
            `;
        }
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                ${product.discount ? '<span class="discount-ribbon">OFERTA</span>' : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                ${priceHTML}
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Añadir al Carrito</button>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones de añadir al carrito
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Modificar la función loadProducts para mostrar descuentos
function loadProducts(page = 1) {
    currentPage = page;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products.slice(0, endIndex);
    
    displaySearchResults(productsToShow);
    
    if (endIndex >= products.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Eliminar del carrito
function removeFromCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Vaciar carrito
function clearCart() {
    cart = [];
    updateCart();
}

// Event listeners
cartIcon.addEventListener('click', () => {
    cartModal.classList.add('open');
    overlay.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('open');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    cartModal.classList.remove('open');
    overlay.classList.remove('active');
});

clearCartBtn.addEventListener('click', clearCart);

// Menú hamburguesa
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Cargar más productos
loadMoreBtn.addEventListener('click', () => {
    loadProducts(currentPage + 1);
});

// Inicializar
loadProducts();