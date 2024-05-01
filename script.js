// Get DOM elements
const navbar = document.getElementById("nav");
const navToggle = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.body;
const header = document.getElementById("page-header");

// Function to toggle the navbar and overlay
function toggleNavbar() {
  navbar.classList.toggle("show-menu");
  overlay.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

// Add event listeners
function addEventListeners() {
  if (navToggle) {
    navToggle.addEventListener("click", toggleNavbar);
  }

  if (navClose) {
    navClose.addEventListener("click", toggleNavbar);
  }

  if (overlay) {
    overlay.addEventListener("click", toggleNavbar);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("no-scroll");
      navbar.classList.remove("show-menu");
      overlay.classList.remove("active");
    });
  });
}

// Handle scroll event
function handleScroll() {
  // Check if the device's screen size is smaller than 1240px
  if (window.innerWidth < 1240) {
    // Check if the user has scrolled down at least 50 pixels
    if (window.scrollY >= 50) {
      // Add the 'bg-header' class to the header element
      header.classList.add("bg-header");
    } else {
      // Remove the 'bg-header' class from the header element
      header.classList.remove("bg-header");
    }
  } else {
    // Remove the 'bg-header' class from the header element
    header.classList.remove("bg-header");
  }
}

// Initialize the application
function init() {
  addEventListeners();
  window.addEventListener("scroll", handleScroll);
}

init();
