export function renderSearchPrimary() {
  function renderSearchBar1() {
    const searchBarInput = document.getElementById("search-bar");
    const searchBarButton = document.getElementById("search-button");

    const availableKeywords = [
      "led",
      "sto je led",
      "sto je led rasvjeta",
      "led rasvjeta",
      "prednosti led rasvjete",
    ];

    const resultBox = document.getElementById("suggestionBox");

    searchBarInput.onkeyup = function () {
      let result = [];
      let userInput = searchBarInput.value;
      if (userInput.length) {
        result = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(userInput.toLowerCase());
        });

        console.log(result);
      }
      displaySuggestion(result);
    };

    function displaySuggestion(result) {
      const content = result.map((list) => {
        return `<li class="list-group-item list-group-item-light fw-bold text-start">${list}</li>`;
      });

      resultBox.innerHTML = `<ul class="list-group mb-4">${content.join(
        ""
      )}</ul>`;
    }

    searchBarButton.addEventListener("click", handleSearch);

    function handleSearch(event) {
      event.preventDefault();

      const keyword = event.target.parentElement
        .querySelector("input")
        .value.toLowerCase();

      switch (keyword) {
        case "led":
        case "led rasvjeta":
        case "sto je led":
        case "sto je led rasvjeta":
          window.location.href = ".././pages/led.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = ".././pages/prednosti-led-rasvjete.html";
      }
    }
  }
  function renderSearchBar2() {
    const searchBarInput = document.getElementById("search-bar-2");
    const searchBarButton = document.getElementById("search-button-2");

    const availableKeywords = [
      "led",
      "sto je led",
      "sto je led rasvjeta",
      "led rasvjeta",
      "prednosti led rasvjete",
    ];

    const resultBox = document.getElementById("suggestionBox-2");

    searchBarInput.onkeyup = function () {
      let result = [];
      let userInput = searchBarInput.value;
      if (userInput.length) {
        result = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(userInput.toLowerCase());
        });

        console.log(result);
      }
      displaySuggestion(result);
    };

    function displaySuggestion(result) {
      const content = result.map((list) => {
        return `<li class="list-group-item list-group-item-light fw-bold text-start">${list}</li>`;
      });

      resultBox.innerHTML = `<ul class="list-group mb-4">${content.join(
        ""
      )}</ul>`;
    }

    searchBarButton.addEventListener("click", handleSearch);

    function handleSearch(event) {
      event.preventDefault();

      const keyword = event.target.parentElement
        .querySelector("input")
        .value.toLowerCase();

      switch (keyword) {
        case "led":
        case "led rasvjeta":
        case "sto je led":
        case "sto je led rasvjeta":
          window.location.href = ".././pages/led.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = ".././pages/prednosti-led-rasvjete.html";
      }
    }
  }

  renderSearchBar1();
  renderSearchBar2();
}

export function renderSearchBarSecondary() {
  function renderSearchBar1() {
    const searchBarInput = document.getElementById("search-bar");
    const searchBarButton = document.getElementById("search-button");

    const availableKeywords = [
      "led",
      "sto je led",
      "sto je led rasvjeta",
      "led rasvjeta",
      "prednosti led rasvjete",
    ];

    const resultBox = document.getElementById("suggestionBox");

    searchBarInput.onkeyup = function () {
      let result = [];
      let userInput = searchBarInput.value;
      if (userInput.length) {
        result = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(userInput.toLowerCase());
        });

        console.log(result);
      }
      displaySuggestion(result);
    };

    function displaySuggestion(result) {
      const content = result.map((list) => {
        return `<li class="list-group-item list-group-item-light fw-bold text-start">${list}</li>`;
      });

      resultBox.innerHTML = `<ul class="list-group mb-4">${content.join(
        ""
      )}</ul>`;
    }

    searchBarButton.addEventListener("click", handleSearch);

    function handleSearch(event) {
      event.preventDefault();

      const keyword = event.target.parentElement
        .querySelector("input")
        .value.toLowerCase();

      switch (keyword) {
        case "led":
        case "led rasvjeta":
        case "sto je led":
        case "sto je led rasvjeta":
          window.location.href = ".././pages/led.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = ".././pages/prednosti-led-rasvjete.html";
      }
    }
  }
  function renderSearchBar2() {
    const searchBarInput = document.getElementById("search-bar-2");
    const searchBarButton = document.getElementById("search-button-2");

    const availableKeywords = [
      "led",
      "sto je led",
      "sto je led rasvjeta",
      "led rasvjeta",
      "prednosti led rasvjete",
    ];

    const resultBox = document.getElementById("suggestionBox-2");

    searchBarInput.onkeyup = function () {
      let result = [];
      let userInput = searchBarInput.value;
      if (userInput.length) {
        result = availableKeywords.filter((keyword) => {
          return keyword.toLowerCase().includes(userInput.toLowerCase());
        });

        console.log(result);
      }
      displaySuggestion(result);
    };

    function displaySuggestion(result) {
      const content = result.map((list) => {
        return `<li class="list-group-item list-group-item-light fw-bold text-start">${list}</li>`;
      });

      resultBox.innerHTML = `<ul class="list-group mb-4">${content.join(
        ""
      )}</ul>`;
    }

    searchBarButton.addEventListener("click", handleSearch);

    function handleSearch(event) {
      event.preventDefault();

      const keyword = event.target.parentElement
        .querySelector("input")
        .value.toLowerCase();

      switch (keyword) {
        case "led":
        case "led rasvjeta":
        case "sto je led":
        case "sto je led rasvjeta":
          window.location.href = ".././pages/led.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = ".././pages/prednosti-led-rasvjete.html";
      }
    }
  }

  renderSearchBar1();
  renderSearchBar2();
}
