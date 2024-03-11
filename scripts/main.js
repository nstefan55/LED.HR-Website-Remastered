import { scrollHeader, returnPositionArrow } from "./functions/scroll.js";

import { toggleSearchPlaceholder } from "./footer.js";

document.addEventListener("DOMContentLoaded", function () {
  scrollHeader();
  returnPositionArrow();
  toggleSearchPlaceholder();
});
