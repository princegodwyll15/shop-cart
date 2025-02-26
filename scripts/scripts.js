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
