const about = [
  {
    aboutHead: "Our Story",
    aboutIcon: "fa-solid fa-business-time",
    aboutContent:
      "Founded by [Your Name], our company is built on a love for fragrances and a commitment to quality. We believe that perfume is more than just a scent - it's a way to express yourself, evoke emotions, and create lasting impressions.",
  },
  {
    aboutHead: "Our Perfumes",
    aboutIcon: "fa-solid fa-spray-can-sparkles",
    aboutContent:
      "Our collection features an array of sweet perfumes, each carefully crafted to transport you to a world of beauty and wonder. From floral to fruity, our fragrances are designed to delight your senses and leave a lasting impression.",
  },
  {
    aboutHead: "Our mission and values",
    aboutIcon: "fa-solid fa-star",
    aboutContent:
      " Innovation: We're constantly exploring new fragrance combinations and techniques to stay ahead of the curve. Customer Delight: We're passionate about providing exceptional customer service and ensuring that every interaction with us is a positive one. ",
  },
  {
    aboutHead: "Meet Our Team",
    aboutIcon: "fa-solid fa-handshake",
    aboutContent:
      "Meet the talented individuals who make up our team: - [Your Name]: Founder & Perfumer - [Team Member Name]: Perfume Connoisseur -[Team Member Name]: Customer Service Expert",
  },
  {
    aboutHead: "Get in touch",
    aboutIcon: "fa-regular fa-envelope",
    aboutContent:
      "We'd love to hear from you! Contact us at [Your Email] or [Your Phone Number] to learn more about our perfumes, request a custom fragrance consultation, or simply share your thoughts on our products. ",
  },
  {
    aboutHead: "Visit Us",
    aboutIcon: "fa-solid fa-house",
    aboutContent:
      " We'd love to welcome you to our store! You can find us at: [Your Company Name] [Street Address] [City, State, ZIP] [Country]",
  },
];

const getAboutSection = about.slice(0, 3);

function aboutSection() {
  const aboutGrid = document.querySelector(".about-content");
  getAboutSection.forEach((aboutInfo) => {
    const aboutCard = document.createElement("div");
    aboutCard.className = "about-card";
    const aboutHead = document.createElement("h2");
    const aboutIcon = document.createElement("i");
    const aboutParagraph = document.createElement("p");

    aboutHead.className = "aboutHead";
    aboutIcon.className = `${aboutInfo.aboutIcon}`; // Add Font Awesome icon class
    aboutParagraph.className = "aboutParagraph";

    aboutHead.textContent = aboutInfo.aboutHead;
    aboutIcon.textContent = ""; // Remove text content for Font Awesome icon
    aboutParagraph.textContent = aboutInfo.aboutContent;

    aboutGrid.appendChild(aboutCard);
    aboutCard.appendChild(aboutHead);
    aboutCard.appendChild(aboutIcon);
    aboutCard.appendChild(aboutParagraph);
  });
}
aboutSection();
