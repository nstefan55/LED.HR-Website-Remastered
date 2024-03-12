export function returnPositionArrow() {
  window.addEventListener("scroll", function () {
    let arrow = document.querySelector(".returnArrow");

    let scrollPosition = window.scrollY;

    let target = document.querySelector(".info-showcase");

    if (scrollPosition < 4950) {
      arrow.classList.add("hidden");
    } else {
      arrow.classList.remove("hidden");
    }
  });
}
