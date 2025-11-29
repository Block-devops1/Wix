let cartCount = 0;

function addToCart() {
    // 1. Increase the number
    cartCount = cartCount + 1;
    
    // 2. Alert the user
    alert("Item added! You have " + cartCount + " items in your cart.");
    
    // 3. (Optional) Update the text in the menu
    // You would need to learn 'DOM Manipulation' to change the "Cart (0)" text dynamically.
}