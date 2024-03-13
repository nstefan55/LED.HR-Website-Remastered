export function toggleNavbarCollapse() {
  if (window.innerWidth <= 992) {
    const navDropdownLinks = document.querySelectorAll(".dropdown-item");
    const menuToggle = document.getElementById("navMenu");
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
      toggle: false,
    });

    navDropdownLinks.forEach((link) => {
      link.addEventListener("click", () => {
        bsCollapse.toggle();
      });
    });
  }
}
