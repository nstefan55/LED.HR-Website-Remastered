import { returnPositionArrow } from "./functions/scroll.js";

import { toggleSearchPlaceholder } from "./footer.js";

import { toggleNavbarCollapse } from "./header.js";

import { responsiveBtns } from "./buttons.js";

document.addEventListener("DOMContentLoaded", function () {
  returnPositionArrow();
  toggleSearchPlaceholder();
  toggleNavbarCollapse();
  responsiveBtns();
});
