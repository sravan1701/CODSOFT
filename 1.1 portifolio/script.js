document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  // Toggle mobile menu and change icon
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    // Change icon based on menu state
    if (navMenu.classList.contains("show-menu")) {
      menuToggle.innerHTML = "&#10006;"; // X icon
    } else {
      menuToggle.innerHTML = "&#9776;"; // Hamburger icon
    }
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      menuToggle.innerHTML = "&#9776;"; // Reset to hamburger icon
    });
  });

  // Update active link based on scroll position
  const updateActiveLink = () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Offset for fixed navbar
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  // Run updateActiveLink on scroll and page load
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();  // Initial run on page load
});
