const products = [
  { id: 1, name: "Rose Perfume", price: 29.99, description: "A sweet and floral.", itemImg: 'images/product (1).jpg' },
  { id: 2, name: "Citrus Splash", price: 24.99, description: "A refreshing burst.", itemImg: 'images/product (2).jpg' },
  { id: 3, name: "Vanilla Essence", price: 22.99, description: "Warm and comforting.", itemImg: 'images/product (4).jpg' },
  { id: 4, name: "Lavender Oil", price: 19.99, description: "Calming and soothing.", itemImg: 'images/product (5).jpg' },
  { id: 5, name: "Citrus Splash", price: 24.99, description: "A refreshing burst.", itemImg: 'images/product (6).jpg' },
  { id: 6, name: "Vanilla Essence", price: 22.99, description: "Warm and comforting.", itemImg: 'images/product (7).jpg' },
  { id: 7, name: "Rose Perfume", price: 29.99, description: "A sweet and floral.", itemImg: 'images/product (8).jpg' }
];

let cart = [];

function displayProducts() {
  const productGrid = document.querySelector('.product-grid');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    const creatImg = document.createElement('img');
    creatImg.src = product.itemImg;
    creatImg.alt = product.name;
    creatImg.onerror = function() {
    this.src = 'images/default-product.jpg'; // Fallback image
    };

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const aboutProduct = document.createElement('p');
    aboutProduct.innerHTML = `${product.description}<br>Price: $${product.price.toFixed(2)}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.addEventListener('click', () => addToCart(product.id));

    card.appendChild(creatImg);
    card.appendChild(productName);
    card.appendChild(aboutProduct);
    card.appendChild(addToCartButton);
    productGrid.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');

  cartList.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;

    const removeButton = document.createElement('button');
    removeButton.className = "removeButton";
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeFromCart(item.id));

    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(productId) {
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem.quantity > 1) {
    cartItem.quantity -= 1;
  } else {
    cart = cart.filter(item => item.id !== productId);
  }

  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const confirmCheckout = confirm("Are you sure you want to proceed with the checkout?");
  if (!confirmCheckout) return;

  const cartItems = cart.map(item => `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`).join('\n');
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  alert(`Thank you for your purchase!\n\nItems:\n${cartItems}\n\nTotal: $${totalPrice}`);

  cart = [];
  updateCart();
}

// Form Submission for Contact Form
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!message) {
    alert("Please enter your message.");
    return;
  }

  document.getElementById('form-response').textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`;
  document.getElementById('contact-form').reset();
});

// Form Submission for Comment Form
document.getElementById('comment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (!userName || !comment) {
    alert("Please fill in all fields.");
    return;
  }

  const commentItem = document.createElement('p');
  commentItem.textContent = `"${comment}" - ${userName}`;
  document.getElementById('comment-list').appendChild(commentItem);

  document.getElementById('comment-form').reset();
});

// Hamburger Menu Toggle
const getNavigation = document.querySelector('.navigation');
const getHamburgerButton = document.querySelector('#menu');
getHamburgerButton.addEventListener('click', () => {
  getHamburgerButton.classList.toggle('open');
  getNavigation.classList.toggle('open');
});

// Checkout Button
document.getElementById('checkout-btn').addEventListener('click', checkout);

// Display Products on Page Load
displayProducts();
