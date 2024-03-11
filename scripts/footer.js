export function toggleSearchPlaceholder() {
  const searchBar = document.querySelector(".js-search-input");

  searchBar.addEventListener("focus", function () {
    searchBar.placeholder = "";
  });

  searchBar.addEventListener("blur", function () {
    searchBar.placeholder = "Što Vas zanima ?";
  });
}
