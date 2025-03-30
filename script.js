document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Back to Top Button functionality
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("open");
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    });
  }

  // Profile Contact Button
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", function() {
      alert("Contact me at lowen.dabi@example.com");
    });
  }
});