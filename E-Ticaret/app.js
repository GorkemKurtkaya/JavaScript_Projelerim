document.addEventListener("DOMContentLoaded", () => {
    const productSearchInput = document.getElementById("product-search");
    const cartTotal = document.getElementById("cart-total");
    const checkoutTotal = document.getElementById("checkout-total");

    let cartItems = [];

    // Simulate adding products to cart
    function addToCart(product) {
        cartItems.push(product);
        updateCart();
    }

    // Update cart total
    function updateCart() {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        cartTotal.textContent = total;
        checkoutTotal.textContent = total;
    }

    // Search products
    productSearchInput.addEventListener("input", () => {
        const query = productSearchInput.value.toLowerCase();
        const products = document.querySelectorAll(".product");
        products.forEach(product => {
            const title = product.querySelector(".product-title").textContent.toLowerCase();
            if (title.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // Add to cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = {
                title: button.dataset.title,
                price: button.dataset.price,
                quantity: 1
            };
            addToCart(product);
        });
    });
});
