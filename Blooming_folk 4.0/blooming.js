// Array to hold cart items
let cart = [];

// Function to handle adding items to the cart
function addToCart(productId) {
    const product = {
        id: productId,
        quantity: 1 // Default quantity is 1
    };
    
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if already in cart
    } else {
        cart.push(product); // Add new product to cart
    }
    
    // Update the cart UI
    updateCartUI();
}

// Function to update cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Product ID: ${item.id}, Quantity: ${item.quantity}`;
        cartItems.appendChild(listItem);
    });
}

// Event listener for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-id');
        addToCart(productId);
    });
});

// Event listener for Checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    // Redirect to checkout page or show a checkout form
    window.location.href = 'checkout.html'; // Example: redirect to a checkout page
});
