const products = [
    {
      id: 1,
      name: "Rose Perfume",
      price: 29.99,
      description: "A sweet and floral.",
      itemImg: "static/product (1).jpg",
    },
    {
      id: 2,
      name: "Citrus Splash",
      price: 24.99,
      description: "A refreshing burst.",
      itemImg: "static/product (2).jpg",
    },
    {
      id: 3,
      name: "Vanilla Essence",
      price: 22.99,
      description: "Warm and comforting.",
      itemImg: "static/product (4).jpg",
    },
    {
      id: 4,
      name: "Lavender Oil",
      price: 19.99,
      description: "Calming and soothing.",
      itemImg: "static/product (5).jpg",
    },
    {
      id: 5,
      name: "Citrus Splash",
      price: 24.99,
      description: "A refreshing burst.",
      itemImg: "static/product (6).jpg",
    },
    {
      id: 6,
      name: "Vanilla Essence",
      price: 22.99,
      description: "Warm and comforting.",
      itemImg: "static/product (7).jpg",
    },
    {
      id: 7,
      name: "Rose Perfume",
      price: 29.99,
      description: "A sweet and floral.",
      itemImg: "static/product (8).jpg",
    },
  ];
  
  //list of products to dislplay n the homepage
  const homePageProducts = products.slice(0, 4);
  console.log(homePageProducts);
  
  let cart = [];
  
  function displayProducts() {
    const productGrid = document.querySelector(".product-grid");
    homePageProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";
  
      const creatImg = document.createElement("img");
      creatImg.src = product.itemImg;
      creatImg.alt = product.name;
      creatImg.onerror = function () {
        this.src = "images/default-product.jpg"; // Fallback image
      };
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
  
      const aboutProduct = document.createElement("p");
      aboutProduct.innerHTML = `${
        product.description
      }<br>Price: $${product.price.toFixed(2)}`;
  
      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Add to Cart";
      addToCartButton.addEventListener("click", () => addToCart(product.id));
  
      card.appendChild(creatImg);
      card.appendChild(productName);
      card.appendChild(aboutProduct);
      card.appendChild(addToCartButton);
      productGrid.appendChild(card);
    });
  }
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    
    if (!product) {
      console.error("Product not found");
      return;
    }
  
    const cartItem = cart.find((item) => item.id === productId);
  
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      // Create a new object instead of modifying the original product
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCheckoutButton();
    updateCart();
  }
  
  
  //hide checkout button if cart is empty
  const checkoutButton = document.querySelector("#checkout-btn");
  function updateCheckoutButton() {
    if (cart.length === 0) {
      checkoutButton.style.display = "none"; // Hide when cart is empty
      console.log("The shopping cart array is empty.");
    } else {
      checkoutButton.style.display = "inline"; // Show when cart has items
      console.log("The shopping cart array is not empty.");
    }
  }
  
  updateCheckoutButton();
  
  
  function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");
  
    cartList.innerHTML = "";
    let totalPrice = 0;
  
    cart.forEach((item) => {
      const shoppingCartContent = document.createElement("p");
      shoppingCartContent.innerHTML = `
      <b class="product-name">Product Name:</b> 
      <span class="product-detail">${item.name}</span> - 
      <b class="price">Price Of Product:</b> 
      <span class="product-detail">$${item.price.toFixed(2)}</span> x 
      <b class="quantity">Quantity:</b> 
      <span class="product-detail">${item.quantity}</span> - `;
      const removeButton = document.createElement("button");
      removeButton.className = "removeButton";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => removeFromCart(item.id));
  
      shoppingCartContent.appendChild(removeButton);
      cartList.appendChild(shoppingCartContent);
      totalPrice += item.price * item.quantity;
    });
  
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
  
  function removeFromCart(productId) {
    const cartItem = cart.find((item) => item.id === productId);
  
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    } else {
      cart = cart.filter((item) => item.id !== productId);
    }
  
    updateCart();
    updateCheckoutButton();
  }
  
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    const confirmCheckout = confirm(
      "Are you sure you want to proceed with the checkout?"
    );
    if (!confirmCheckout) return;
  
    const cartItems = cart
      .map(
        (item) => `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`
      )
      .join("\n");
    const totalPrice = cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  
    alert(
      `Thank you for your purchase!\n\nItems:\n${cartItems}\n\nTotal: $${totalPrice}`
    );
  
    cart = [];
    updateCart();
  }
  
  // Form Submission for Contact Form
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
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
  
      document.getElementById(
        "form-response"
      ).textContent = `Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`;
      document.getElementById("contact-form").reset();
    });
  
  // Form Submission for Comment Form
  document
    .getElementById("comment-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      const userName = document.getElementById("userName").value.trim();
      const comment = document.getElementById("comment").value.trim();
  
      if (!userName || !comment) {
        alert("Please fill in all fields.");
        return;
      }
  
      const commentItem = document.createElement("p");
      commentItem.textContent = `"${comment}" - ${userName}`;
      document.getElementById("comment-list").appendChild(commentItem);
  
      document.getElementById("comment-form").reset();
    });
  
  // Hamburger Menu Toggle
  const getNavigation = document.querySelector(".navigation");
  const getHamburgerButton = document.querySelector("#menu");
  getHamburgerButton.addEventListener("click", () => {
    getHamburgerButton.classList.toggle("open");
    getNavigation.classList.toggle("open");
  });
  
  // Checkout Button
  document.getElementById("checkout-btn").addEventListener("click", checkout);
  
  // Display Products on Page Load
  displayProducts();
  
  //footer content
  const getYear = document.getElementById("year");
  currentYear = new Date().getFullYear();
  getYear.innerHTML = `&copy; ${currentYear} Miss Gee <span>MG</span> Unique Fragrance. All rights
  reserved.`;
  