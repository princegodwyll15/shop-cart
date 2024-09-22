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

getSelector = document.querySelectorAll("a");
getSelector[0].classList.add("active");

getSelector.forEach((selector) => {
  selector.addEventListener("click", () => {
    getSelector.forEach((otherSelector) =>
      otherSelector.classList.remove("active")
    );
    selector.classList.add("active");
  });
});

// Get input elements
const userNameInput = document.getElementById("userName");
const commentInput = document.getElementById("comment");
const createCommentElement = document.getElementById("appendComment");
const sendMessageButton = document.getElementById("Sendmessage");

// Add event listener to send message button
sendMessageButton.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  const comment = commentInput.value.trim();

  // Validate input
  if (userName && comment) {
    // Append comment to paragraph
    createCommentElement.innerHTML += `${comment} - ${userName}<br>`;
    // Clear input fields
    userNameInput.value = "";
    commentInput.value = "";
  } else {
    alert("Please enter both username and comment.");
  }
});
