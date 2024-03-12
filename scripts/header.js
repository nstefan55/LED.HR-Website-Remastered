export function toggleNavbarCollapse() {
  const navDropdownLinks = document.querySelectorAll(".dropdown-item");
  const navLinks = document.querySelectorAll(".js-nav-link");
  const menuToggle = document.getElementById("navMenu");
  const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false,
  });
  navDropdownLinks.forEach((link) => {
    link.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      bsCollapse.toggle();
    });
  });
}
