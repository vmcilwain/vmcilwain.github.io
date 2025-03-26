document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".nav");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  function checkMobileView() {
    if (nav) {
      if (window.innerWidth <= 768) {
        nav.classList.add("mobile-nav");
      } else {
        nav.classList.remove("mobile-nav");
        nav.classList.remove("menu-open");
      }
    }
  }

  // Toggle menu when hamburger is clicked
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", function () {
      if (nav.classList.contains("mobile-nav")) {
        nav.classList.toggle("menu-open");
      }
    });
  }

  // Close menu when clicking on a link in mobile view
  const navLinks = document.querySelectorAll(".nav-item a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (
        nav.classList.contains("mobile-nav") &&
        nav.classList.contains("menu-open")
      ) {
        nav.classList.remove("menu-open");
      }
    });
  });

  checkMobileView();

  window.addEventListener("resize", checkMobileView);
});
