const products = [
  { 
    id: 1,
    name: "Rose Perfume",
    price: 29.99,
    description: "A sweet and floral scent.",
    itemImg: 'images/product (1).jpg'
  },
  { id: 2,
    name: "Citrus Splash", 
    price: 24.99, 
    description: "A refreshing burst of citrus.",
    itemImg: 'images/product (2).jpg'
   },
  { 
    id: 3,
    name: "Vanilla Essence", 
    price: 22.99, description: "Warm and comforting.",
    itemImg: 'images/product (4).jpg'
  },
  { 
    id: 4,
    name: "Rose Perfume",
    price: 29.99,
    description: "A sweet and floral scent.",
    itemImg: 'images/product (4).jpg'
  },
  { 
    id: 5,
    name: "Lavender Oil", 
    price: 19.99, 
    description: "Calming and soothing.",
    itemImg: 'images/product (5).jpg'
  },
  { id: 6,
    name: "Citrus Splash", 
    price: 24.99, 
    description: "A refreshing burst of citrus.",
    itemImg: 'images/product (6).jpg'
   },
  { 
    id: 7,
    name: "Vanilla Essence", 
    price: 22.99, 
    description: "Warm and comforting.",
    itemImg: 'images/product (7).jpg'
  },
  { 
    id: 8,
    name: "Rose Perfume",
    price: 29.99,
    description: "A sweet and floral scent.",
    itemImg: 'images/product (8).jpg'
  }
];

// Define global variables
let cart = [];
// Function to display products
function displayProducts() {
  const productGrid = document.querySelector('.product-grid');
  products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      const creatImg = document.createElement('img');
      creatImg.src = product.itemImg;
      creatImg.alt = "Product Image";

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

// Function to add an item to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (cart.some(item => item.id === productId)) {
      alert("This item is already in your cart.");
      return;
  }

  cart.push(product);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartList = document.getElementById('cart-list');
  const totalPriceElement = document.getElementById('total-price');

  cartList.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartList.appendChild(listItem);
      totalPrice += item.price;
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
  }

  const cartItems = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('\n');
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  alert(`Thank you for your purchase!\n\nItems:\n${cartItems}\n\nTotal: $${totalPrice}`);

  cart = [];
  updateCart();
}

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  document.getElementById('form-response').textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`;
  document.getElementById('contact-form').reset();
});

// Comment submission
document.getElementById('comment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value.trim();
  const userComment = document.getElementById('comment').value.trim();
  if (!userName || !userComment) {
      alert("Please fill in both fields.");
      return;
  }

  const noComments = document.getElementById('no-comments');
  if (noComments) noComments.remove();

  const newComment = document.createElement('p');
  newComment.textContent = `"${userComment}" - ${userName}`;
  document.getElementById('comment-list').appendChild(newComment);

  document.getElementById('userName').value = '';
  document.getElementById('comment').value = '';
});

// Hamburger menu toggle
const getNavigation = document.querySelector('.navigation');
const getHamburgerButton = document.querySelector('#menu');
getHamburgerButton.addEventListener('click', () => {
  getHamburgerButton.classList.toggle('open');
  getNavigation.classList.toggle('open');
});

// Event listener for the checkout button
document.getElementById('checkout-btn').addEventListener('click', checkout);

// Initialize product display
displayProducts();
