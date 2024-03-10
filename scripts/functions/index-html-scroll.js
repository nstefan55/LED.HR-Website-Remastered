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
