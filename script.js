// Select the hamburger menu button and navigation links
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

// Toggle the mobile navigation menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Update aria-label for better accessibility
  const menuIsOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the menu after clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Add current year to the footer automatically
const footerText = document.querySelector(".site-footer p");
const currentYear = new Date().getFullYear();

footerText.innerHTML = `&copy; ${currentYear} Alfie Cross. Built with HTML, CSS and JavaScript.`;