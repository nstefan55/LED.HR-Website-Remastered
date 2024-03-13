export function responsiveBtns() {
  window.addEventListener("resize", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((btn) => {
      if (window.innerWidth <= 576) {
        btn.classList.add("btn-sm");
        btn.classList.remove("btn-lg");
      } else {
        btn.classList.remove("btn-sm");
        btn.classList.add("btn-lg");
      }
    });
  });
}
