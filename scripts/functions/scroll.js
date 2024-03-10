export function stickyTop() {
  window.onscroll = function () {
    let scrollPos = window.scrollY;
    let section = document.getElementById("led__fountains");

    if (scrollPos > 2000) {
      section.classList.remove("sticky-top");
    } else {
      section.classList.add("sticky-top");
    }
  };
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
