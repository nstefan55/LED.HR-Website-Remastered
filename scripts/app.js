import { returnPositionArrow, stickyTop } from "./functions/scroll.js";

// Website Refresh to Top
document.documentElement.scrollTop = 0;
document.addEventListener("DOMContentLoaded", function () {
  stickyTop();
  returnPositionArrow();
});
