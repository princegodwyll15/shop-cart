document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
        }
      });
    }, { threshold: 0.5 });
  
    document.querySelectorAll(".product-card").forEach((card) => {
      observer.observe(card);
    });
  });
  