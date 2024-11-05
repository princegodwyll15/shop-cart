const products = [
  { 
    id: 1,
    name: "Rose Perfume",
    price: 29.99, description: "A sweet and floral scent.",
    itemImg: 'C:\Users\godwy\Documents\Github\shop-cart\images\product (1).jpg'
  },
  { id: 3,
    name: "Citrus Splash", 
    price: 24.99, 
    description: "A refreshing burst of citrus.",
    itemImg: "images\product(1).jpg"
   },
  { 
    id: 4,
    name: "Vanilla Essence", 
    price: 22.99, description: "Warm and comforting.",
    itemImg: "images\product(1).jpg"
  },
  { 
    id: 1,
    name: "Rose Perfume",
    price: 29.99, description: "A sweet and floral scent.",
    itemImg: "images\product(1).jpg"
  },
  { 
    id: 2,
    name: "Lavender Oil", 
    price: 19.99, 
    description: "Calming and soothing.",
    itemImg: "images\product(1).jpg"
  },
  { id: 3,
    name: "Citrus Splash", 
    price: 24.99, 
    description: "A refreshing burst of citrus.",
    itemImg: "images\product(1).jpg"
   },
  { 
    id: 4,
    name: "Vanilla Essence", 
    price: 22.99, 
    description: "Warm and comforting.",
    itemImg: "images\product(1).jpg"
  },
  { 
    id: 1,
    name: "Rose Perfume",
    price: 29.99,
    description: "A sweet and floral scent.",
    itemImg: "images\product(1).jpg"
  }
];
let cart = [];

// Function to display products
function displayProducts() {
  const productGrid = document.querySelector('.product-grid');
  products.forEach(product => {
    const card = document.createElement('div');
    const createImg = document.createElement('img');
    createImg.src= product.itemImg;
    createImg.loading="lazy";
    createImg.style.width='100%';
    
    card.className = 'product-card';
    card.appendChild(createImg);

    card.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productGrid.appendChild(card);
  });
}

// Function to add item to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
}

// Function to update the shopping cart display
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

// Initialize the product display
displayProducts();


// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let cartItems = cart.map(item => `${item.name} - $${item.price.toFixed(2)}`).join('\n');
  let totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  alert(`Thank you for your purchase!\n\nItems:\n${cartItems}\n\nTotal: $${totalPrice}`);

  // Clear the cart after checkout
  cart = [];
  updateCart();
}
// Event listener for the checkout button
document.getElementById('checkout-btn').addEventListener('click', checkout);


// Function to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a confirmation message (in a real application, you would send this data to a server)
  const responseMessage = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} shortly.`;
  document.getElementById('form-response').textContent = responseMessage;

  // Clear the form fields
  document.getElementById('contact-form').reset();
});


// Function to handle comment submission
function handleCommentSubmit(event) {
  event.preventDefault(); // Prevent form submission

  const userName = document.getElementById('userName').value.trim();
  const userComment = document.getElementById('comment').value.trim();

  // Simple validation
  if (!userName || !userComment) {
    alert("Please fill in both fields.");
    return;
  }

  // Create a new comment element
  const newComment = document.createElement('p');
  newComment.textContent = `"${userComment}" - ${userName}`;
  newComment.className = 'user-comment'; // Optional: add a class for styling

  // Append the new comment to the comment list
  document.getElementById('comment-list').appendChild(newComment);

  // Clear the input fields
  document.getElementById('userName').value = '';
  document.getElementById('comment').value = '';

  // Display a success message (optional)
  const responseMessage = document.createElement('p');
  responseMessage.textContent = "Your comment has been submitted!";
  responseMessage.className = 'success-message';
  document.getElementById('form-response').appendChild(responseMessage);

  // Remove the success message after a few seconds
  setTimeout(() => {
    responseMessage.remove();
  }, 3000);
}

// Add event listener to the comment form
document.getElementById('comment-form').addEventListener('submit', handleCommentSubmit);


//create a hamburger for the navigation
const getNavigation = document.querySelector('.navigation');
const gethamburgerButton = document.querySelector('#menu');
gethamburgerButton.addEventListener('click', ()=>{
  gethamburgerButton.classList.toggle('open');
  getNavigation.classList.toggle('open');
})