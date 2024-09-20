// Scroll to Products when 'Shop Now' button is clicked
document.getElementById("shopNowBtn").addEventListener("click", function () {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
  });
});

// Handle Add to Cart functionality
let cart = [];

document.querySelectorAll(".addToCartBtn").forEach((button) => {
  button.addEventListener("click", function () {
    let product = this.getAttribute("data-product");
    addToCart(product);
  });
});

function addToCart(product) {
  cart.push(product);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartSection = document.getElementById("cart");
  const cartItems = document.getElementById("cartItems");

  // Clear the current cart display
  cartItems.innerHTML = "";

  // Display the new cart items
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item;
    cartItems.appendChild(li);
  });

  // Show the cart section if it was hidden
  if (cart.length > 0) {
    cartSection.style.display = "block";
  }
}

// Checkout button functionality
document.getElementById("checkoutBtn").addEventListener("click", function () {
  alert("Proceeding to checkout with items: " + cart.join(", "));
  // Clear the cart
  cart = [];
  updateCartDisplay();
  document.getElementById("cart").style.display = "none";
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Simple validation (you could add more)
  if (name && email && message) {
    alert("Thank you for your message, " + name + "!");
    document.getElementById("contactForm").reset(); // Reset form after submission
  } else {
    alert("Please fill in all fields.");
  }
});

function messageSent() {
  const disMsg = alert("Thanks for your feedback we are working on it");
  document.getElementById("sendmessage").innerHTML = disMsg;
}
