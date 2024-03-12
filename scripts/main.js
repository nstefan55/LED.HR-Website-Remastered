import { returnPositionArrow } from "./functions/scroll.js";

import { toggleSearchPlaceholder } from "./footer.js";

import { toggleNavbarCollapse } from "./header.js";

document.addEventListener("DOMContentLoaded", function () {
  returnPositionArrow();
  toggleSearchPlaceholder();
  toggleNavbarCollapse();
});
