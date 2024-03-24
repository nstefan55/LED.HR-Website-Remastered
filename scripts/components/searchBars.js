export function renderSearchPrimary() {
  function renderSearchBar1() {
    const searchBarInput = document.getElementById("search-bar");
    const searchBarButton = document.getElementById("search-button");

    const availableKeywords = [
      "sto je led rasvjeta ?",
      "primjena led rasvjete",
      "led proizvodi",
      "svi proizvodi",
      "prednosti led rasvjete",
      "česta pitanja",
      "novosti",
      "novosti led rasvjete",
      "reflektori",
      "downlight",
      "ulična rasvjeta",
      "linearna rasvjeta",
      "podvodna rasvjeta",
      "cijevi",
      "paneli",
      "žarulje",
      "moduli",
      "usluge",
      "financiranje",
      "upiti",
      "kako se uvjeriti u prednosti ?", //NOTES : redirectati na ID od tog dijela stranice!
      "led rasvjeta na lizing",
      "monocrystal ruska tvrtka proizvela umjetni kristal",
      "nobelova nagrada za otkriće plave diode",
      "arhiva objava 2016.",
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
        return `<li class="list-group-item list-group-item-light fw-bold text-start curs-none">${list}</li>`;
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
        case "sto je led":
        case "sto je led rasvjeta":
        case "led rasvjeta":
          window.location.href = ".././pages/led.html";
          break; //works !

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = ".././pages/primjena-led-rasvjete.html";
          break; //works!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = ".././pages/led-proizvodi.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = ".././pages/prednosti-led-rasvjete.html";
          break; //works!

        case "česta pitanja":
        case "pitanja":
          window.location.href = ".././pages/česta-pitanja.html";
          break; //works!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = ".././pages/novosti-iz-led-tehnologije.html";
          break;

        case "led reflektori":
        case "reflektori":
          window.location.href = ".././pages/led-proizvodi/led-reflektori.html";
          break; //works

        case "led downlight":
        case "downlight":
          window.location.href = ".././pages/led-proizvodi/led-downlight.html";
          break;

        case "ulična rasvjeta":
        case "ulična led rasvjeta":
        case "ulična led":
        case "ulična":
          window.location.href =
            ".././pages/led-proizvodi/ulična-led-rasvjeta.html";
          break;

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            ".././pages/led-proizvodi/linearna-led-rasvjeta.html";
          break;

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            ".././pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break;

        case "led cijevi":
        case "cijevi":
          window.location.href = ".././pages/led-proizvodi/led-cijevi.html";
          break;

        case "led paneli":
        case "paneli":
          window.location.href = ".././pages/led-proizvodi/led-paneli.html";
          break;

        case "led žarulje":
        case "žarulje":
          window.location.href = ".././pages/led-proizvodi/led-žarulje.html";
          break;

        case "led moduli":
        case "moduli":
          window.location.href = ".././pages/led-proizvodi/led-moduli.html";
          break;

        case "led usluge":
        case "usluge":
        case "usluge led rasvjete":
          window.location.href = ".././pages/usluge.html";
          break; //works!!

        case "led upiti":
        case "upiti":
        case "upiti led rasvjete":
          window.location.href = ".././pages/upiti.html";
          break; //works!

        case "led financiranje":
        case "financiranje":
        case "usluge financiranja":
        case "usluge financiranja led rasvjete":
          window.location.href = ".././pages/financiranje.html";
          break; //works!!

        case "kako se uvjeriti u prednosti":
        case "kako se uvjeriti u prednosti led rasvjete":
        case "kako se uvjeriti u prednosti led":
          window.location.href = ".././pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = ".././pages/news/led-rasvjeta-na-lizing.html";
          break; //works!

        case "umjetni kristal":
        case "umjetni kristal mase 300kg":
        case "kristal mase 300kg":
        case "monocrystal":
        case "ruska tvrtka monocrystal":
        case "ruska tvrtka":
          window.location.href =
            ".././pages/news/ruska-tvrtka-monocrystal-napravila-umjetni-kristal-od-safira-mase-300-kg.html";
          break; //works!

        case "otkriće plave diode":
        case "plava dioda":
        case "nobelova nagrada":
        case "dioda nobelova nagrada":
        case "nobelova nagrada za otrkiće plave diode":
          window.location.href =
            ".././pages/news/nobelova-nagrada-za-otkriće-plave-diode.html";
          break; //works!

        case "arhiva objava":
        case "arhiva":
        case "arhiva 2016":
        case "arhiva objava 2016":
          window.location.href = ".././pages/arhiva/";
          break;
      }
    }
  }
  function renderSearchBar2() {
    const searchBarInput = document.getElementById("search-bar-2");
    const searchBarButton = document.getElementById("search-button-2");

    const availableKeywords = [
      "sto je led rasvjeta ?",
      "primjena led rasvjete",
      "led proizvodi",
      "svi proizvodi",
      "prednosti led rasvjete",
      "česta pitanja",
      "novosti",
      "novosti led rasvjete",
      "reflektori",
      "downlight",
      "ulična rasvjeta",
      "linearna rasvjeta",
      "podvodna rasvjeta",
      "cijevi",
      "paneli",
      "žarulje",
      "moduli",
      "usluge",
      "financiranje",
      "upiti",
      "kako se uvjeriti u prednosti ?", //NOTES : redirectati na ID od tog dijela stranice!
      "led rasvjeta na lizing",
      "monocrystal ruska tvrtka proizvela umjetni kristal",
      "nobelova nagrada za otkriće plave diode",
      "arhiva objava 2016.",
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
        return `<li class="list-group-item list-group-item-light fw-bold text-start curs-none">${list}</li>`;
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
        case "sto je led":
        case "sto je led rasvjeta":
        case "led rasvjeta":
          window.location.href = ".././pages/led.html";
          break; //works !

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = ".././pages/primjena-led-rasvjete.html";
          break; //works!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = ".././pages/led-proizvodi.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = ".././pages/prednosti-led-rasvjete.html";
          break; //works!

        case "česta pitanja":
        case "pitanja":
          window.location.href = ".././pages/česta-pitanja.html";
          break; //works!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = ".././pages/novosti-iz-led-tehnologije.html";
          break;

        case "led reflektori":
        case "reflektori":
          window.location.href = ".././pages/led-proizvodi/led-reflektori.html";
          break; //works

        case "led downlight":
        case "downlight":
          window.location.href = ".././pages/led-proizvodi/led-downlight.html";
          break;

        case "ulična rasvjeta":
        case "ulična led rasvjeta":
        case "ulična led":
        case "ulična":
          window.location.href =
            ".././pages/led-proizvodi/ulična-led-rasvjeta.html";
          break;

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            ".././pages/led-proizvodi/linearna-led-rasvjeta.html";
          break;

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            ".././pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break;

        case "led cijevi":
        case "cijevi":
          window.location.href = ".././pages/led-proizvodi/led-cijevi.html";
          break;

        case "led paneli":
        case "paneli":
          window.location.href = ".././pages/led-proizvodi/led-paneli.html";
          break;

        case "led žarulje":
        case "žarulje":
          window.location.href = ".././pages/led-proizvodi/led-žarulje.html";
          break;

        case "led moduli":
        case "moduli":
          window.location.href = ".././pages/led-proizvodi/led-moduli.html";
          break;

        case "led usluge":
        case "usluge":
        case "usluge led rasvjete":
          window.location.href = ".././pages/usluge.html";
          break; //works!!

        case "led upiti":
        case "upiti":
        case "upiti led rasvjete":
          window.location.href = ".././pages/upiti.html";
          break; //works!

        case "led financiranje":
        case "financiranje":
        case "usluge financiranja":
        case "usluge financiranja led rasvjete":
          window.location.href = ".././pages/financiranje.html";
          break; //works!!

        case "kako se uvjeriti u prednosti":
        case "kako se uvjeriti u prednosti led rasvjete":
        case "kako se uvjeriti u prednosti led":
          window.location.href = ".././pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = ".././pages/news/led-rasvjeta-na-lizing.html";
          break; //works!

        case "umjetni kristal":
        case "umjetni kristal mase 300kg":
        case "kristal mase 300kg":
        case "monocrystal":
        case "ruska tvrtka monocrystal":
        case "ruska tvrtka":
          window.location.href =
            ".././pages/news/ruska-tvrtka-monocrystal-napravila-umjetni-kristal-od-safira-mase-300-kg.html";
          break; //works!

        case "otkriće plave diode":
        case "plava dioda":
        case "nobelova nagrada":
        case "dioda nobelova nagrada":
        case "nobelova nagrada za otrkiće plave diode":
          window.location.href =
            ".././pages/news/nobelova-nagrada-za-otkriće-plave-diode.html";
          break; //works!

        case "arhiva objava":
        case "arhiva":
        case "arhiva 2016":
        case "arhiva objava 2016":
          window.location.href = ".././pages/arhiva/";
          break;
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
      "sto je led rasvjeta ?",
      "primjena led rasvjete",
      "led proizvodi",
      "svi proizvodi",
      "prednosti led rasvjete",
      "česta pitanja",
      "novosti",
      "novosti led rasvjete",
      "reflektori",
      "downlight",
      "ulična rasvjeta",
      "linearna rasvjeta",
      "podvodna rasvjeta",
      "cijevi",
      "paneli",
      "žarulje",
      "moduli",
      "usluge",
      "financiranje",
      "upiti",
      "kako se uvjeriti u prednosti ?", //NOTES : redirectati na ID od tog dijela stranice!
      "led rasvjeta na lizing",
      "monocrystal ruska tvrtka proizvela umjetni kristal",
      "nobelova nagrada za otkriće plave diode",
      "arhiva objava 2016.",
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
        return `<li class="list-group-item list-group-item-light fw-bold text-start curs-none">${list}</li>`;
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
        case "sto je led":
        case "sto je led rasvjeta":
        case "led rasvjeta":
          window.location.href = "../../pages/led.html";
          break; //works !

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = "../../pages/primjena-led-rasvjete.html";
          break; //works!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = "../../pages/led-proizvodi.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = "../../pages/prednosti-led-rasvjete.html";
          break; //works!

        case "česta pitanja":
        case "pitanja":
          window.location.href = "../../pages/česta-pitanja.html";
          break; //works!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = "../../pages/novosti-iz-led-tehnologije.html";
          break;

        case "led reflektori":
        case "reflektori":
          window.location.href =
            "../../pages/led-proizvodi/led-reflektori.html";
          break; //works

        case "led downlight":
        case "downlight":
          window.location.href = "../../pages/led-proizvodi/led-downlight.html";
          break;

        case "ulična rasvjeta":
        case "ulična led rasvjeta":
        case "ulična led":
        case "ulična":
          window.location.href =
            "../../pages/led-proizvodi/ulična-led-rasvjeta.html";
          break;

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            "../../pages/led-proizvodi/linearna-led-rasvjeta.html";
          break;

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            "../../pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break;

        case "led cijevi":
        case "cijevi":
          window.location.href = "../../pages/led-proizvodi/led-cijevi.html";
          break;

        case "led paneli":
        case "paneli":
          window.location.href = "../../pages/led-proizvodi/led-paneli.html";
          break;

        case "led žarulje":
        case "žarulje":
          window.location.href = "../../pages/led-proizvodi/led-žarulje.html";
          break;

        case "led moduli":
        case "moduli":
          window.location.href = "../../pages/led-proizvodi/led-moduli.html";
          break;

        case "led usluge":
        case "usluge":
        case "usluge led rasvjete":
          window.location.href = "../../pages/usluge.html";
          break; //works!!

        case "led upiti":
        case "upiti":
        case "upiti led rasvjete":
          window.location.href = "../../pages/upiti.html";
          break; //works!

        case "led financiranje":
        case "financiranje":
        case "usluge financiranja":
        case "usluge financiranja led rasvjete":
          window.location.href = "../../pages/financiranje.html";
          break; //works!!

        case "kako se uvjeriti u prednosti":
        case "kako se uvjeriti u prednosti led rasvjete":
        case "kako se uvjeriti u prednosti led":
          window.location.href = "../../pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = "../../pages/news/led-rasvjeta-na-lizing.html";
          break; //works!

        case "umjetni kristal":
        case "umjetni kristal mase 300kg":
        case "kristal mase 300kg":
        case "monocrystal":
        case "ruska tvrtka monocrystal":
        case "ruska tvrtka":
          window.location.href =
            "../../pages/news/ruska-tvrtka-monocrystal-napravila-umjetni-kristal-od-safira-mase-300-kg.html";
          break; //works!

        case "otkriće plave diode":
        case "plava dioda":
        case "nobelova nagrada":
        case "dioda nobelova nagrada":
        case "nobelova nagrada za otrkiće plave diode":
          window.location.href =
            "../../pages/news/nobelova-nagrada-za-otkriće-plave-diode.html";
          break; //works!

        case "arhiva objava":
        case "arhiva":
        case "arhiva 2016":
        case "arhiva objava 2016":
          window.location.href = "../../pages/arhiva/";
          break;
      }
    }
  }
  function renderSearchBar2() {
    const searchBarInput = document.getElementById("search-bar-2");
    const searchBarButton = document.getElementById("search-button-2");

    const availableKeywords = [
      "sto je led rasvjeta ?",
      "primjena led rasvjete",
      "led proizvodi",
      "svi proizvodi",
      "prednosti led rasvjete",
      "česta pitanja",
      "novosti",
      "novosti led rasvjete",
      "reflektori",
      "downlight",
      "ulična rasvjeta",
      "linearna rasvjeta",
      "podvodna rasvjeta",
      "cijevi",
      "paneli",
      "žarulje",
      "moduli",
      "usluge",
      "financiranje",
      "upiti",
      "kako se uvjeriti u prednosti ?", //NOTES : redirectati na ID od tog dijela stranice!
      "led rasvjeta na lizing",
      "monocrystal ruska tvrtka proizvela umjetni kristal",
      "nobelova nagrada za otkriće plave diode",
      "arhiva objava 2016.",
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
        return `<li class="list-group-item list-group-item-light fw-bold text-start curs-none">${list}</li>`;
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
        case "sto je led":
        case "sto je led rasvjeta":
        case "led rasvjeta":
          window.location.href = "../../pages/led.html";
          break; //works !

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = "../../pages/primjena-led-rasvjete.html";
          break; //works!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = "../../pages/led-proizvodi.html";
          break;

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = "../../pages/prednosti-led-rasvjete.html";
          break; //works!

        case "česta pitanja":
        case "pitanja":
          window.location.href = ".././pages/česta-pitanja.html";
          break; //works!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = "../../pages/novosti-iz-led-tehnologije.html";
          break;

        case "led reflektori":
        case "reflektori":
          window.location.href =
            "../../pages/led-proizvodi/led-reflektori.html";
          break; //works

        case "led downlight":
        case "downlight":
          window.location.href = "../../pages/led-proizvodi/led-downlight.html";
          break;

        case "ulična rasvjeta":
        case "ulična led rasvjeta":
        case "ulična led":
        case "ulična":
          window.location.href =
            "../../pages/led-proizvodi/ulična-led-rasvjeta.html";
          break;

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            "../../pages/led-proizvodi/linearna-led-rasvjeta.html";
          break;

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            "../../pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break;

        case "led cijevi":
        case "cijevi":
          window.location.href = "../../pages/led-proizvodi/led-cijevi.html";
          break;

        case "led paneli":
        case "paneli":
          window.location.href = "../../pages/led-proizvodi/led-paneli.html";
          break;

        case "led žarulje":
        case "žarulje":
          window.location.href = "../../pages/led-proizvodi/led-žarulje.html";
          break;

        case "led moduli":
        case "moduli":
          window.location.href = "../../pages/led-proizvodi/led-moduli.html";
          break;

        case "led usluge":
        case "usluge":
        case "usluge led rasvjete":
          window.location.href = "../../pages/usluge.html";
          break; //works!!

        case "led upiti":
        case "upiti":
        case "upiti led rasvjete":
          window.location.href = "../../pages/upiti.html";
          break; //works!

        case "led financiranje":
        case "financiranje":
        case "usluge financiranja":
        case "usluge financiranja led rasvjete":
          window.location.href = "../../pages/financiranje.html";
          break; //works!!

        case "kako se uvjeriti u prednosti":
        case "kako se uvjeriti u prednosti led rasvjete":
        case "kako se uvjeriti u prednosti led":
          window.location.href = "../../pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = "../../pages/news/led-rasvjeta-na-lizing.html";
          break; //works!

        case "umjetni kristal":
        case "umjetni kristal mase 300kg":
        case "kristal mase 300kg":
        case "monocrystal":
        case "ruska tvrtka monocrystal":
        case "ruska tvrtka":
          window.location.href =
            "../../pages/news/ruska-tvrtka-monocrystal-napravila-umjetni-kristal-od-safira-mase-300-kg.html";
          break; //works!

        case "otkriće plave diode":
        case "plava dioda":
        case "nobelova nagrada":
        case "dioda nobelova nagrada":
        case "nobelova nagrada za otrkiće plave diode":
          window.location.href =
            "../../pages/news/nobelova-nagrada-za-otkriće-plave-diode.html";
          break; //works!

        case "arhiva objava":
        case "arhiva":
        case "arhiva 2016":
        case "arhiva objava 2016":
          window.location.href = "../../pages/arhiva/";
          break;
      }
    }
  }

  renderSearchBar1();
  renderSearchBar2();
}
