import { returnPositionArrow } from "./functions/scroll.js";

import { toggleSearchPlaceholder } from "./footer.js";

import { toggleNavbarCollapse } from "./header.js";

import { responsiveBtns } from "./buttons.js";

import { renderTooltips } from "./functions/bsTooltips.js";

document.addEventListener("DOMContentLoaded", function () {
  returnPositionArrow();
  toggleSearchPlaceholder();
  toggleNavbarCollapse();
  responsiveBtns();
  renderTooltips();
});
