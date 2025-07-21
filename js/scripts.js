// scripts.js

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Form validation
function validateContactForm() {
  const form = document.querySelector("form");
  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  if (!name.value || !email.value || !message.value) {
    alert("Please fill out all fields.");
    return false;
  }
  return true;
}

const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    if (!validateContactForm()) {
      e.preventDefault();
    }
  });
}
