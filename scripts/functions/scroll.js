export function scrollHeader() {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".js-navbar");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

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
