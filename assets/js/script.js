// Dynamically update the footer year
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Smoothly scroll to specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Simple form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all the required fields.");
      event.preventDefault(); // Prevent form submission
    } else {
      alert("Thank you for getting in touch!");
    }
  });
}
