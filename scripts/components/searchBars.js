export function renderSearchPrimary() {
  function renderSearchBar1() {
    const searchBarInput = document.getElementById("search-bar");
    const searchBarButton = document.getElementById("search-button");

    const availableKeywords = [
      "led",
      "led rasvjeta",
      "sto je led ?",
      "što je led ?",
      "sto je led rasvjeta ?",
      "što je led rasvjeta ?",
      "prednosti",
      "prednosti led",
      "prednosti led rasvjete",
      "česta pitanja",
      "cesta pitanja",
      "pitanja",
      "novosti",
      "novosti led",
      "novosti led rasvjete",
      "primjena",
      "primjena led",
      "primjena led rasvjete",
      "hoteli",
      "apartmani",
      "hoteli apartmani",
      "hoteli i apartmani",
      "primjena za hotele i apartmane",
      "primjena za hotele apartmane",
      "primjena za hotele",
      "primjena za apartmane",
      "benzinske postaje",
      "benzinske",
      "primjena za benzinske postaje",
      "mini marketi",
      "mini",
      "marketi",
      "primjena za mini markete",
      "trgovacki centri",
      "trgovački centri",
      "trgovacki",
      "trgovački",
      "centri",
      "primjena za trgovacke centre",
      "primjena za trgovačke centre",
      "uredi",
      "primjena za urede",
      "ljekarne",
      "primjena za ljekarne",
      "saloni",
      "primjena za salone",
      "industrijska",
      "industrijska led",
      "industrijska led rasvjeta",
      "primjena industrijske led rasvjete",
      "primjena industrijske led",
      "primjena industrijske rasvjete",
      "primjena industrijske",
      "obrti",
      "radione",
      "obrti radione",
      "obrti i radione",
      "primjena za obrte i radione",
      "primjena za obrte",
      "primjena za radione",
      "sportski tereni",
      "sportski",
      "tereni",
      "primjena za sportske terene",
      "osiguranje objekata",
      "osiguranje",
      "primjena za osiguranje objekata",
      "bazeni",
      "fontane",
      "bazeni i fontane",
      "bazeni fontane",
      "primjena za bazene fontane",
      "primjena za bazene",
      "primjena za fontane",
      "primjena ulične i parking rasvjete",
      "primjena ulicne i parking rasvjete",
      "primjena ulicne rasvjete",
      "primjena ulične rasvjete",
      "primjena parking rasvjete",
      "kućna rasvjeta",
      "kucna rasvjeta",
      "primjena kucne rasvjete",
      "primjena kućne rasvjete",
      "vozila",
      "primjena za vozila",
      "plovila",
      "primjena za plovila",
      "farme",
      "primjena za farme",
      "led proizvodi",
      "proizvodi",
      "svi proizvodi",
      "svi led proizvodi",
      "led reflektori",
      "reflektori",
      "led downlight",
      "downlight",
      "ulična led rasvjeta",
      "ulicna led rasvjeta",
      "ulicna rasvjeta",
      "ulična rasvjeta",
      "linearna led rasvjeta",
      "linearna led",
      "linearna rasvjeta",
      "podvodna led rasvjeta",
      "podvodna rasvjeta",
      "podvodna led",
      "led cijevi",
      "cijevi",
      "led paneli",
      "paneli",
      "led žarulje",
      "led zarulje",
      "žarulje",
      "zarulje",
      "led moduli",
      "moduli",
      "led usluge",
      "usluge",
      "usluge led rasvjete",
      "led upiti",
      "upiti",
      "upiti led rasvjete",
      "led financiranje",
      "financiranje",
      "usluge financiranja",
      "usluge financiranja led rasvjete",
      "kako se uvjeriti u prednosti ?",
      "led rasvjeta na lizing",
      "ruska tvrtka umjetni kristal",
      "otkrice plave diode",
      "otkriće plave diode",
      "nobelova nagrada za plavu diodu",
      "arhiva",
      "arhiva objava",
      "arhiva objava 2016",
      "arhiva objava 2015",
      "2016",
      "2015",
      "objave 2015",
      "arhiva february 2016",
      "arhiva september 2015",
      "arhiva july 2015",
      "february 2016",
      "july 2015",
      "february",
      "september 2015",
      "september",
      "july",
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
        case "sto je led ?":
        case "što je led":
        case "što je led ?":
        case "sto je led rasvjeta":
        case "sto je led rasvjeta ?":
        case "što je led rasvjeta":
        case "što je led rasvjeta ?":
        case "led rasvjeta":
          window.location.href = "../../pages/led.html";
          break; //works !!

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = "../../pages/prednosti-led-rasvjete.html";
          break; //works!!

        case "česta pitanja":
        case "cesta pitanja":
        case "pitanja":
          window.location.href = "../../pages/česta-pitanja.html";
          break; //works!!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = "../../pages/novosti-iz-led-tehnologije.html";
          break; //works!!

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = "../../pages/primjena-led-rasvjete.html";
          break; //works!

        case "hoteli":
        case "apartmani":
        case "hoteli apartmani":
        case "hoteli i apartmani":
        case "primjena za hotele i apartmane":
        case "primjena led za hotele i apartmane":
        case "primjena za hotele apartmane":
        case "primjena led za hotele apartmane":
        case "primjena za hotele":
        case "primjena led za hotele":
        case "primjena za apartmane":
        case "primjena led za apartmane":
          window.location.href =
            "../../pages/primjena-led-rasvjete/hoteli-i-apartmani.html";
          break; //works!

        case "benzinske postaje":
        case "benzinske":
        case "primjena led za benzinske postaje":
        case "primjena za benzinske postaje":
          window.location.href =
            "../../pages/primjena-led-rasvjete/benzinske-postaje.html";
          break; //works!!

        case "mini marketi":
        case "mini":
        case "marketi":
        case "primjena led za mini markete":
        case "primjena za mini markete":
          window.location.href =
            "../../pages/primjena-led-rasvjete/mini-marketi.html";
          break; //works!!

        case "trgovacki centri":
        case "trgovački centri":
        case "trgovacki":
        case "centri":
        case "primjena led za trgovacke centre":
        case "primjena led za trgovačke centre":
        case "primjena za trgovacke centre":
        case "primjena za trgovačke centre":
          window.location.href =
            "../../pages/primjena-led-rasvjete/trgovacki-centri.html";
          break; //works!!

        case "uredi":
        case "primjena led za urede":
        case "primjena za urede":
          window.location.href = "../../pages/primjena-led-rasvjete/uredi.html";
          break; //works!!

        case "ljekarne":
        case "primjena led za ljekarne":
        case "primjena za ljekarne":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ljekarne.html";
          break; //works!!

        case "saloni":
        case "primjena led za salone":
        case "primjena za salone":
          window.location.href =
            "../../pages/primjena-led-rasvjete/saloni.html";
          break; //works!!

        case "industrijska":
        case "industrijska led rasvjeta":
        case "primjena industrijske led rasvjete":
        case "primjena industrijske led":
        case "primjena industrijske rasvjete":
        case "primjena industrijske":
          window.location.href =
            "../../pages/primjena-led-rasvjete/industrijska-led-rasvjeta.html";
          break; //works!!

        case "obrti":
        case "radione":
        case "obrti radione":
        case "obrti i radione":
        case "primjena led za obrte i radione":
        case "primjena za obrte i radione":
        case "primjena led za obrte radione":
        case "primjena za obrte radione":
        case "primjena led za obrte":
        case "primjena za obrte":
        case "primjena za radione":
        case "primjena led za radione":
          window.location.href =
            "../../pages/primjena-led-rasvjete/obrti-i-radione.html";
          break; //works!!

        case "sportski tereni":
        case "sportski":
        case "tereni":
        case "primjena led za sportske terene":
        case "primjena za sportske terene":
          window.location.href =
            "../../pages/primjena-led-rasvjete/sportski-tereni.html";
          break; //works!!

        case "osiguranje objekata":
        case "osiguranje":
        case "primjena led za osiguranje objekata":
        case "primjena za osiguranje objekata":
          window.location.href =
            "../../pages/primjena-led-rasvjete/osiguranje-objekata.html";
          break; //works!!

        case "bazeni":
        case "fontane":
        case "bazeni fontane":
        case "bazeni i fontane":
        case "primjena led za bazene i fontane":
        case "primjena za bazene i fontane":
        case "primjena led za bazene fontane":
        case "primjena za bazene fontane":
        case "primjena led za bazene":
        case "primjena za bazene":
        case "primjena led za fontane":
        case "primjena za fontane":
          window.location.href =
            "../../pages/primjena-led-rasvjete/bazeni-i-fontane.html";
          break; //works!

        case "primjena ulične i parking rasvjete":
        case "primjena ulicne i parking rasvjete":
        case "primjena ulične rasvjete":
        case "primjena ulicne rasvjete":
        case "primjena parking rasvjete":
        case "primjena ulične":
        case "primjena ulicne":
        case "primjena parking":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ulična-i-parking-rasvjeta.html";
          break; //works

        case "kućna rasvjeta":
        case "kucna rasvjeta":
        case "primjena kućne rasvjete":
        case "primjena kucne rasvjete":
          window.location.href =
            "../../pages/primjena-led-rasvjete/kućna-rasvjeta.html";
          break; //works!!

        case "vozila":
        case "primjena led za vozila":
        case "primjena za vozila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/vozila.html";
          break; //works!!

        case "plovila":
        case "primjena led za plovila":
        case "primjena za plovila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/plovila.html";
          break; //works!!

        case "farme":
        case "primjena led za farme":
        case "primjena za farme":
          window.location.href = "../../pages/primjena-led-rasvjete/farme.html";
          break; //works!!

        case "led proizvodi":
        case "proizvodi":
        case "svi led proizvodi":
          window.location.href = "../../pages/led-proizvodi.html";
          break; //works!!

        case "led reflektori":
        case "reflektori":
          window.location.href =
            "../../pages/led-proizvodi/led-reflektori.html";
          break; //works!!

        case "led downlight":
        case "downlight":
          window.location.href = "../../pages/led-proizvodi/led-downlight.html";
          break; //works!!

        case "ulična rasvjeta":
        case "ulicna rasvjeta":
        case "ulična led rasvjeta":
        case "ulicna led rasvjeta":
        case "ulična led":
        case "ulična led":
        case "ulična":
        case "ulicna":
          window.location.href =
            "../../pages/led-proizvodi/ulična-led-rasvjeta.html";
          break; //works!

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            "../../pages/led-proizvodi/linearna-led-rasvjeta.html";
          break; //works!!

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            "../../pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break; //works!!

        case "led cijevi":
        case "cijevi":
          window.location.href = "../../pages/led-proizvodi/led-cijevi.html";
          break; //works!!

        case "led paneli":
        case "paneli":
          window.location.href = "../../pages/led-proizvodi/led-paneli.html";
          break; //works!!

        case "led žarulje":
        case "led zarulje":
        case "žarulje":
        case "zarulje":
          window.location.href = "../../pages/led-proizvodi/led-žarulje.html";
          break; //works!!

        case "led moduli":
        case "moduli":
          window.location.href = "../../pages/led-proizvodi/led-moduli.html";
          break; //works!!

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
        case "kako se uvjeriti u prednosti ?":
        case "kako se uvjeriti u prednosti led ?":
        case "kako se uvjeriti u prednosti led":
          window.location.href = "../../pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = "../../pages/news/led-rasvjeta-na-lizing.html";
          break; //works!!

        case "umjetni kristal":
        case "umjetni kristal mase 300kg":
        case "kristal mase 300kg":
        case "monocrystal":
        case "ruska tvrtka monocrystal":
        case "ruska tvrtka":
        case "ruska tvrtka umjetni kristal":
          window.location.href =
            "../../pages/news/ruska-tvrtka-monocrystal-napravila-umjetni-kristal-od-safira-mase-300-kg.html";
          break; //works!

        case "otkriće plave diode":
        case "otkrice plave diode":
        case "plava dioda":
        case "nobelova nagrada":
        case "nobelova nagrada za plavu diodu":
        case "dioda nobelova nagrada":
        case "nobelova nagrada za otrkiće plave diode":
          window.location.href =
            "../../pages/news/nobelova-nagrada-za-otkriće-plave-diode.html";
          break; //works!

        case "arhiva objava":
        case "arhiva":
        case "arhiva 2016":
        case "arhiva objava 2016":
        case "2016":
        case "objave 2016":
          window.location.href = "../../pages/arhiva/";
          break;
      }
    }
  }
  function renderSearchBar2() {
    const searchBarInput = document.getElementById("search-bar-2");
    const searchBarButton = document.getElementById("search-button-2");

    const availableKeywords = [
      "led",
      "led rasvjeta",
      "sto je led ?",
      "što je led ?",
      "sto je led rasvjeta ?",
      "što je led rasvjeta ?",
      "prednosti",
      "prednosti led",
      "prednosti led rasvjete",
      "česta pitanja",
      "cesta pitanja",
      "pitanja",
      "novosti",
      "novosti led",
      "novosti led rasvjete",
      "primjena",
      "primjena led",
      "primjena led rasvjete",
      "hoteli",
      "apartmani",
      "hoteli apartmani",
      "hoteli i apartmani",
      "primjena za hotele i apartmane",
      "primjena za hotele apartmane",
      "primjena za hotele",
      "primjena za apartmane",
      "benzinske postaje",
      "benzinske",
      "primjena za benzinske postaje",
      "mini marketi",
      "mini",
      "marketi",
      "primjena za mini markete",
      "trgovacki centri",
      "trgovački centri",
      "trgovacki",
      "trgovački",
      "centri",
      "primjena za trgovacke centre",
      "primjena za trgovačke centre",
      "uredi",
      "primjena za urede",
      "ljekarne",
      "primjena za ljekarne",
      "saloni",
      "primjena za salone",
      "industrijska",
      "industrijska led",
      "industrijska led rasvjeta",
      "primjena industrijske led rasvjete",
      "primjena industrijske led",
      "primjena industrijske rasvjete",
      "primjena industrijske",
      "obrti",
      "radione",
      "obrti radione",
      "obrti i radione",
      "primjena za obrte i radione",
      "primjena za obrte",
      "primjena za radione",
      "sportski tereni",
      "sportski",
      "tereni",
      "primjena za sportske terene",
      "osiguranje objekata",
      "osiguranje",
      "primjena za osiguranje objekata",
      "bazeni",
      "fontane",
      "bazeni i fontane",
      "bazeni fontane",
      "primjena za bazene fontane",
      "primjena za bazene",
      "primjena za fontane",
      "primjena ulične i parking rasvjete",
      "primjena ulicne i parking rasvjete",
      "primjena ulicne rasvjete",
      "primjena ulične rasvjete",
      "primjena parking rasvjete",
      "kućna rasvjeta",
      "kucna rasvjeta",
      "primjena kucne rasvjete",
      "primjena kućne rasvjete",
      "vozila",
      "primjena za vozila",
      "plovila",
      "primjena za plovila",
      "farme",
      "primjena za farme",
      "led proizvodi",
      "proizvodi",
      "svi proizvodi",
      "svi led proizvodi",
      "led reflektori",
      "reflektori",
      "led downlight",
      "downlight",
      "ulična led rasvjeta",
      "ulicna led rasvjeta",
      "ulicna rasvjeta",
      "ulična rasvjeta",
      "linearna led rasvjeta",
      "linearna led",
      "linearna rasvjeta",
      "podvodna led rasvjeta",
      "podvodna rasvjeta",
      "podvodna led",
      "led cijevi",
      "cijevi",
      "led paneli",
      "paneli",
      "led žarulje",
      "led zarulje",
      "žarulje",
      "zarulje",
      "led moduli",
      "moduli",
      "led usluge",
      "usluge",
      "usluge led rasvjete",
      "led upiti",
      "upiti",
      "upiti led rasvjete",
      "led financiranje",
      "financiranje",
      "usluge financiranja",
      "usluge financiranja led rasvjete",
      "kako se uvjeriti u prednosti ?",
      "led rasvjeta na lizing",
      "ruska tvrtka umjetni kristal",
      "otkrice plave diode",
      "otkriće plave diode",
      "nobelova nagrada za plavu diodu",
      "arhiva",
      "arhiva objava",
      "arhiva objava 2016",
      "arhiva objava 2015",
      "2016",
      "2015",
      "objave 2015",
      "arhiva february 2016",
      "arhiva september 2015",
      "arhiva july 2015",
      "february 2016",
      "july 2015",
      "february",
      "september 2015",
      "september",
      "july",
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
        case "što je led":
        case "sto je led rasvjeta":
        case "što je led rasvjeta":
        case "led rasvjeta":
          window.location.href = "../../pages/led.html";
          break; //works !!

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = "../../pages/prednosti-led-rasvjete.html";
          break; //works!!

        case "česta pitanja":
        case "cesta pitanja":
        case "pitanja":
          window.location.href = "../../pages/česta-pitanja.html";
          break; //works!!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = "../../pages/novosti-iz-led-tehnologije.html";
          break; //works!!

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = "../../pages/primjena-led-rasvjete.html";
          break; //works!

        case "hoteli":
        case "apartmani":
        case "hoteli apartmani":
        case "hoteli i apartmani":
        case "primjena hotela i apartmana":
        case "primjena hotela apartmana":
        case "primjena hotela":
        case "primjena apartmana":
          window.location.href =
            "../../pages/primjena-led-rasvjete/hoteli-i-apartmani.html";
          break; //works!

        case "benzinske postaje":
        case "benzinske":
        case "primjena benzinske postaje":
          window.location.href =
            "../../pages/primjena-led-rasvjete/benzinske-postaje.html";
          break; //works!!

        case "mini marketi":
        case "mini":
        case "marketi":
        case "primjena mini marketa":
          window.location.href =
            "../../pages/primjena-led-rasvjete/mini-marketi.html";
          break; //works!!

        case "trgovacki centri":
        case "trgovački centri":
        case "trgovacki":
        case "centri":
        case "primjena trgovackih centara":
        case "primjena trgovackih":
        case "primjena centara":
          window.location.href =
            "../../pages/primjena-led-rasvjete/trgovacki-centri.html";
          break; //works!!

        case "uredi":
        case "primjena ureda":
          window.location.href = "../../pages/primjena-led-rasvjete/uredi.html";
          break; //works!!

        case "ljekarne":
        case "primjena ljekarni":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ljekarne.html";
          break; //works!!

        case "saloni":
        case "primjena salona":
          window.location.href =
            "../../pages/primjena-led-rasvjete/saloni.html";
          break; //works!!

        case "industrijska":
        case "industrijska led rasvjeta":
        case "primjena industrijske led rasvjete":
        case "primjena industrijske led":
        case "primjena industrijske rasvjete":
        case "primjena industrijske":
          window.location.href =
            "../../pages/primjena-led-rasvjete/industrijska-led-rasvjeta.html";
          break; //works!!

        case "obrti":
        case "radione":
        case "obrti radione":
        case "obrti i radione":
        case "primjena obrta i radiona":
        case "primjena obrta radiona":
        case "primjena obrta":
        case "primjena radiona":
          window.location.href =
            "../../pages/primjena-led-rasvjete/obrti-i-radione.html";
          break; //works!!

        case "sportski tereni":
        case "sportski":
        case "tereni":
        case "primjena sportskih terena":
        case "primjena sportskih":
        case "primjena terena":
          window.location.href =
            "../../pages/primjena-led-rasvjete/sportski-tereni.html";
          break; //works!!

        case "osiguranje objekata":
        case "osiguranje":
        case "primjena osiguranja objekata":
        case "primjena osiguranja":
        case "primjena objekata":
          window.location.href =
            "../../pages/primjena-led-rasvjete/osiguranje-objekata.html";
          break; //works!!

        case "bazeni":
        case "fontane":
        case "bazeni fontane":
        case "bazeni i fontane":
        case "primjena bazena i fontana":
        case "primjena bazena fontana":
        case "primjena bazena":
        case "primjena fontana":
          window.location.href =
            "../../pages/primjena-led-rasvjete/bazeni-i-fontane.html";
          break; //works!

        case "primjena ulične i parking":
        case "primjena ulicne i parking":
        case "primjena ulične rasvjete":
        case "primjena ulicne rasvjete":
        case "primjena parking rasvjete":
        case "primjena ulične":
        case "primjena ulicne":
        case "primjena parking":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ulična-i-parking-rasvjeta.html";
          break; //works

        case "kućna rasvjeta":
        case "kucna rasvjeta":
        case "primjena kućne rasvjete":
        case "primjena kucne rasvjete":
          window.location.href =
            "../../pages/primjena-led-rasvjete/kućna-rasvjeta.html";
          break; //works!!

        case "vozila":
        case "primjena vozila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/vozila.html";
          break; //works!!

        case "plovila":
        case "primjena plovila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/plovila.html";
          break; //works!!

        case "farme":
        case "primjena farme":
          window.location.href = "../../pages/primjena-led-rasvjete/farme.html";
          break; //works!!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = "../../pages/led-proizvodi.html";
          break; //works!!

        case "led reflektori":
        case "reflektori":
          window.location.href =
            "../../pages/led-proizvodi/led-reflektori.html";
          break; //works!!

        case "led downlight":
        case "downlight":
          window.location.href = "../../pages/led-proizvodi/led-downlight.html";
          break; //works!!

        case "ulična rasvjeta":
        case "ulicna rasvjeta":
        case "ulična led rasvjeta":
        case "ulicna led rasvjeta":
        case "ulična led":
        case "ulična led":
        case "ulična":
        case "ulicna":
          window.location.href =
            "../../pages/led-proizvodi/ulična-led-rasvjeta.html";
          break; //works!

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            "../../pages/led-proizvodi/linearna-led-rasvjeta.html";
          break; //works!!

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            "../../pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break; //works!!

        case "led cijevi":
        case "cijevi":
          window.location.href = "../../pages/led-proizvodi/led-cijevi.html";
          break; //works!!

        case "led paneli":
        case "paneli":
          window.location.href = "../../pages/led-proizvodi/led-paneli.html";
          break; //works!!

        case "led žarulje":
        case "led zarulje":
        case "žarulje":
        case "zarulje":
          window.location.href = "../../pages/led-proizvodi/led-žarulje.html";
          break; //works!!

        case "led moduli":
        case "moduli":
          window.location.href = "../../pages/led-proizvodi/led-moduli.html";
          break; //works!!

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
        case "kako se uvjeriti u prednosti ?":
        case "kako se uvjeriti u prednosti led ?":
        case "kako se uvjeriti u prednosti led":
          window.location.href = "../../pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = "../../pages/news/led-rasvjeta-na-lizing.html";
          break; //works!!

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
        case "otkrice plave diode":
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

export function renderSearchSecondary() {
  function renderSearchBar1() {
    const searchBarInput = document.getElementById("search-bar");
    const searchBarButton = document.getElementById("search-button");

    const availableKeywords = [
      "led",
      "led rasvjeta",
      "sto je led ?",
      "što je led ?",
      "sto je led rasvjeta ?",
      "što je led rasvjeta ?",
      "prednosti",
      "prednosti led",
      "prednosti led rasvjete",
      "česta pitanja",
      "cesta pitanja",
      "pitanja",
      "novosti",
      "novosti led",
      "novosti led rasvjete",
      "primjena",
      "primjena led",
      "primjena led rasvjete",
      "hoteli",
      "apartmani",
      "hoteli apartmani",
      "hoteli i apartmani",
      "primjena za hotele i apartmane",
      "primjena za hotele apartmane",
      "primjena za hotele",
      "primjena za apartmane",
      "benzinske postaje",
      "benzinske",
      "primjena za benzinske postaje",
      "mini marketi",
      "mini",
      "marketi",
      "primjena za mini markete",
      "trgovacki centri",
      "trgovački centri",
      "trgovacki",
      "trgovački",
      "centri",
      "primjena za trgovacke centre",
      "primjena za trgovačke centre",
      "uredi",
      "primjena za urede",
      "ljekarne",
      "primjena za ljekarne",
      "saloni",
      "primjena za salone",
      "industrijska",
      "industrijska led",
      "industrijska led rasvjeta",
      "primjena industrijske led rasvjete",
      "primjena industrijske led",
      "primjena industrijske rasvjete",
      "primjena industrijske",
      "obrti",
      "radione",
      "obrti radione",
      "obrti i radione",
      "primjena za obrte i radione",
      "primjena za obrte",
      "primjena za radione",
      "sportski tereni",
      "sportski",
      "tereni",
      "primjena za sportske terene",
      "osiguranje objekata",
      "osiguranje",
      "primjena za osiguranje objekata",
      "bazeni",
      "fontane",
      "bazeni i fontane",
      "bazeni fontane",
      "primjena za bazene fontane",
      "primjena za bazene",
      "primjena za fontane",
      "primjena ulične i parking rasvjete",
      "primjena ulicne i parking rasvjete",
      "primjena ulicne rasvjete",
      "primjena ulične rasvjete",
      "primjena parking rasvjete",
      "kućna rasvjeta",
      "kucna rasvjeta",
      "primjena kucne rasvjete",
      "primjena kućne rasvjete",
      "vozila",
      "primjena za vozila",
      "plovila",
      "primjena za plovila",
      "farme",
      "primjena za farme",
      "led proizvodi",
      "proizvodi",
      "svi proizvodi",
      "svi led proizvodi",
      "led reflektori",
      "reflektori",
      "led downlight",
      "downlight",
      "ulična led rasvjeta",
      "ulicna led rasvjeta",
      "ulicna rasvjeta",
      "ulična rasvjeta",
      "linearna led rasvjeta",
      "linearna led",
      "linearna rasvjeta",
      "podvodna led rasvjeta",
      "podvodna rasvjeta",
      "podvodna led",
      "led cijevi",
      "cijevi",
      "led paneli",
      "paneli",
      "led žarulje",
      "led zarulje",
      "žarulje",
      "zarulje",
      "led moduli",
      "moduli",
      "led usluge",
      "usluge",
      "usluge led rasvjete",
      "led upiti",
      "upiti",
      "upiti led rasvjete",
      "led financiranje",
      "financiranje",
      "usluge financiranja",
      "usluge financiranja led rasvjete",
      "kako se uvjeriti u prednosti ?",
      "led rasvjeta na lizing",
      "ruska tvrtka umjetni kristal",
      "otkrice plave diode",
      "otkriće plave diode",
      "nobelova nagrada za plavu diodu",
      "arhiva",
      "arhiva objava",
      "arhiva objava 2016",
      "arhiva objava 2015",
      "2016",
      "2015",
      "objave 2015",
      "arhiva february 2016",
      "arhiva september 2015",
      "arhiva july 2015",
      "february 2016",
      "july 2015",
      "february",
      "september 2015",
      "september",
      "july",
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
        case "što je led":
        case "sto je led rasvjeta":
        case "što je led rasvjeta":
        case "led rasvjeta":
          window.location.href = "../../pages/led.html";
          break; //works !!

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = "../../pages/prednosti-led-rasvjete.html";
          break; //works!!

        case "česta pitanja":
        case "cesta pitanja":
        case "pitanja":
          window.location.href = "../../pages/česta-pitanja.html";
          break; //works!!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = "../../pages/novosti-iz-led-tehnologije.html";
          break; //works!!

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = "../../pages/primjena-led-rasvjete.html";
          break; //works!

        case "hoteli":
        case "apartmani":
        case "hoteli apartmani":
        case "hoteli i apartmani":
        case "primjena hotela i apartmana":
        case "primjena hotela apartmana":
        case "primjena hotela":
        case "primjena apartmana":
          window.location.href =
            "../../pages/primjena-led-rasvjete/hoteli-i-apartmani.html";
          break; //works!

        case "benzinske postaje":
        case "benzinske":
        case "primjena benzinske postaje":
          window.location.href =
            "../../pages/primjena-led-rasvjete/benzinske-postaje.html";
          break; //works!!

        case "mini marketi":
        case "mini":
        case "marketi":
        case "primjena mini marketa":
          window.location.href =
            "../../pages/primjena-led-rasvjete/mini-marketi.html";
          break; //works!!

        case "trgovacki centri":
        case "trgovački centri":
        case "trgovacki":
        case "centri":
        case "primjena trgovackih centara":
        case "primjena trgovackih":
        case "primjena centara":
          window.location.href =
            "../../pages/primjena-led-rasvjete/trgovacki-centri.html";
          break; //works!!

        case "uredi":
        case "primjena ureda":
          window.location.href = "../../pages/primjena-led-rasvjete/uredi.html";
          break; //works!!

        case "ljekarne":
        case "primjena ljekarni":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ljekarne.html";
          break; //works!!

        case "saloni":
        case "primjena salona":
          window.location.href =
            "../../pages/primjena-led-rasvjete/saloni.html";
          break; //works!!

        case "industrijska":
        case "industrijska led rasvjeta":
        case "primjena industrijske led rasvjete":
        case "primjena industrijske led":
        case "primjena industrijske rasvjete":
        case "primjena industrijske":
          window.location.href =
            "../../pages/primjena-led-rasvjete/industrijska-led-rasvjeta.html";
          break; //works!!

        case "obrti":
        case "radione":
        case "obrti radione":
        case "obrti i radione":
        case "primjena obrta i radiona":
        case "primjena obrta radiona":
        case "primjena obrta":
        case "primjena radiona":
          window.location.href =
            "../../pages/primjena-led-rasvjete/obrti-i-radione.html";
          break; //works!!

        case "sportski tereni":
        case "sportski":
        case "tereni":
        case "primjena sportskih terena":
        case "primjena sportskih":
        case "primjena terena":
          window.location.href =
            "../../pages/primjena-led-rasvjete/sportski-tereni.html";
          break; //works!!

        case "osiguranje objekata":
        case "osiguranje":
        case "primjena osiguranja objekata":
        case "primjena osiguranja":
        case "primjena objekata":
          window.location.href =
            "../../pages/primjena-led-rasvjete/osiguranje-objekata.html";
          break; //works!!

        case "bazeni":
        case "fontane":
        case "bazeni fontane":
        case "bazeni i fontane":
        case "primjena bazena i fontana":
        case "primjena bazena fontana":
        case "primjena bazena":
        case "primjena fontana":
          window.location.href =
            "../../pages/primjena-led-rasvjete/bazeni-i-fontane.html";
          break; //works!

        case "primjena ulične i parking":
        case "primjena ulicne i parking":
        case "primjena ulične rasvjete":
        case "primjena ulicne rasvjete":
        case "primjena parking rasvjete":
        case "primjena ulične":
        case "primjena ulicne":
        case "primjena parking":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ulična-i-parking-rasvjeta.html";
          break; //works

        case "kućna rasvjeta":
        case "kucna rasvjeta":
        case "primjena kućne rasvjete":
        case "primjena kucne rasvjete":
          window.location.href =
            "../../pages/primjena-led-rasvjete/kućna-rasvjeta.html";
          break; //works!!

        case "vozila":
        case "primjena vozila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/vozila.html";
          break; //works!!

        case "plovila":
        case "primjena plovila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/plovila.html";
          break; //works!!

        case "farme":
        case "primjena farme":
          window.location.href = "../../pages/primjena-led-rasvjete/farme.html";
          break; //works!!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = "../../pages/led-proizvodi.html";
          break; //works!!

        case "led reflektori":
        case "reflektori":
          window.location.href =
            "../../pages/led-proizvodi/led-reflektori.html";
          break; //works!!

        case "led downlight":
        case "downlight":
          window.location.href = "../../pages/led-proizvodi/led-downlight.html";
          break; //works!!

        case "ulična rasvjeta":
        case "ulicna rasvjeta":
        case "ulična led rasvjeta":
        case "ulicna led rasvjeta":
        case "ulična led":
        case "ulična led":
        case "ulična":
        case "ulicna":
          window.location.href =
            "../../pages/led-proizvodi/ulična-led-rasvjeta.html";
          break; //works!

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            "../../pages/led-proizvodi/linearna-led-rasvjeta.html";
          break; //works!!

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            "../../pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break; //works!!

        case "led cijevi":
        case "cijevi":
          window.location.href = "../../pages/led-proizvodi/led-cijevi.html";
          break; //works!!

        case "led paneli":
        case "paneli":
          window.location.href = "../../pages/led-proizvodi/led-paneli.html";
          break; //works!!

        case "led žarulje":
        case "led zarulje":
        case "žarulje":
        case "zarulje":
          window.location.href = "../../pages/led-proizvodi/led-žarulje.html";
          break; //works!!

        case "led moduli":
        case "moduli":
          window.location.href = "../../pages/led-proizvodi/led-moduli.html";
          break; //works!!

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
        case "kako se uvjeriti u prednosti ?":
        case "kako se uvjeriti u prednosti led ?":
        case "kako se uvjeriti u prednosti led":
          window.location.href = "../../pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = "../../pages/news/led-rasvjeta-na-lizing.html";
          break; //works!!

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
        case "otkrice plave diode":
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
      "led",
      "led rasvjeta",
      "sto je led ?",
      "što je led ?",
      "sto je led rasvjeta ?",
      "što je led rasvjeta ?",
      "prednosti",
      "prednosti led",
      "prednosti led rasvjete",
      "česta pitanja",
      "cesta pitanja",
      "pitanja",
      "novosti",
      "novosti led",
      "novosti led rasvjete",
      "primjena",
      "primjena led",
      "primjena led rasvjete",
      "hoteli",
      "apartmani",
      "hoteli apartmani",
      "hoteli i apartmani",
      "primjena za hotele i apartmane",
      "primjena za hotele apartmane",
      "primjena za hotele",
      "primjena za apartmane",
      "benzinske postaje",
      "benzinske",
      "primjena za benzinske postaje",
      "mini marketi",
      "mini",
      "marketi",
      "primjena za mini markete",
      "trgovacki centri",
      "trgovački centri",
      "trgovacki",
      "trgovački",
      "centri",
      "primjena za trgovacke centre",
      "primjena za trgovačke centre",
      "uredi",
      "primjena za urede",
      "ljekarne",
      "primjena za ljekarne",
      "saloni",
      "primjena za salone",
      "industrijska",
      "industrijska led",
      "industrijska led rasvjeta",
      "primjena industrijske led rasvjete",
      "primjena industrijske led",
      "primjena industrijske rasvjete",
      "primjena industrijske",
      "obrti",
      "radione",
      "obrti radione",
      "obrti i radione",
      "primjena za obrte i radione",
      "primjena za obrte",
      "primjena za radione",
      "sportski tereni",
      "sportski",
      "tereni",
      "primjena za sportske terene",
      "osiguranje objekata",
      "osiguranje",
      "primjena za osiguranje objekata",
      "bazeni",
      "fontane",
      "bazeni i fontane",
      "bazeni fontane",
      "primjena za bazene fontane",
      "primjena za bazene",
      "primjena za fontane",
      "primjena ulične i parking rasvjete",
      "primjena ulicne i parking rasvjete",
      "primjena ulicne rasvjete",
      "primjena ulične rasvjete",
      "primjena parking rasvjete",
      "kućna rasvjeta",
      "kucna rasvjeta",
      "primjena kucne rasvjete",
      "primjena kućne rasvjete",
      "vozila",
      "primjena za vozila",
      "plovila",
      "primjena za plovila",
      "farme",
      "primjena za farme",
      "led proizvodi",
      "proizvodi",
      "svi proizvodi",
      "svi led proizvodi",
      "led reflektori",
      "reflektori",
      "led downlight",
      "downlight",
      "ulična led rasvjeta",
      "ulicna led rasvjeta",
      "ulicna rasvjeta",
      "ulična rasvjeta",
      "linearna led rasvjeta",
      "linearna led",
      "linearna rasvjeta",
      "podvodna led rasvjeta",
      "podvodna rasvjeta",
      "podvodna led",
      "led cijevi",
      "cijevi",
      "led paneli",
      "paneli",
      "led žarulje",
      "led zarulje",
      "žarulje",
      "zarulje",
      "led moduli",
      "moduli",
      "led usluge",
      "usluge",
      "usluge led rasvjete",
      "led upiti",
      "upiti",
      "upiti led rasvjete",
      "led financiranje",
      "financiranje",
      "usluge financiranja",
      "usluge financiranja led rasvjete",
      "kako se uvjeriti u prednosti ?",
      "led rasvjeta na lizing",
      "ruska tvrtka umjetni kristal",
      "otkrice plave diode",
      "otkriće plave diode",
      "nobelova nagrada za plavu diodu",
      "arhiva",
      "arhiva objava",
      "arhiva objava 2016",
      "arhiva objava 2015",
      "2016",
      "2015",
      "objave 2015",
      "arhiva february 2016",
      "arhiva september 2015",
      "arhiva july 2015",
      "february 2016",
      "july 2015",
      "february",
      "september 2015",
      "september",
      "july",
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
        case "što je led":
        case "sto je led rasvjeta":
        case "što je led rasvjeta":
        case "led rasvjeta":
          window.location.href = "../../pages/led.html";
          break; //works !!

        case "prednosti":
        case "prednosti led":
        case "prednosti led rasvjete":
          window.location.href = "../../pages/prednosti-led-rasvjete.html";
          break; //works!!

        case "česta pitanja":
        case "cesta pitanja":
        case "pitanja":
          window.location.href = "../../pages/česta-pitanja.html";
          break; //works!!

        case "novosti":
        case "novosti led":
        case "novosti led rasvjete":
          window.location.href = "../../pages/novosti-iz-led-tehnologije.html";
          break; //works!!

        case "primjena":
        case "primjena rasvjete":
        case "primjena led rasvjete":
          window.location.href = "../../pages/primjena-led-rasvjete.html";
          break; //works!

        case "hoteli":
        case "apartmani":
        case "hoteli apartmani":
        case "hoteli i apartmani":
        case "primjena hotela i apartmana":
        case "primjena hotela apartmana":
        case "primjena hotela":
        case "primjena apartmana":
          window.location.href =
            "../../pages/primjena-led-rasvjete/hoteli-i-apartmani.html";
          break; //works!

        case "benzinske postaje":
        case "benzinske":
        case "primjena benzinske postaje":
          window.location.href =
            "../../pages/primjena-led-rasvjete/benzinske-postaje.html";
          break; //works!!

        case "mini marketi":
        case "mini":
        case "marketi":
        case "primjena mini marketa":
          window.location.href =
            "../../pages/primjena-led-rasvjete/mini-marketi.html";
          break; //works!!

        case "trgovacki centri":
        case "trgovački centri":
        case "trgovacki":
        case "centri":
        case "primjena trgovackih centara":
        case "primjena trgovackih":
        case "primjena centara":
          window.location.href =
            "../../pages/primjena-led-rasvjete/trgovacki-centri.html";
          break; //works!!

        case "uredi":
        case "primjena ureda":
          window.location.href = "../../pages/primjena-led-rasvjete/uredi.html";
          break; //works!!

        case "ljekarne":
        case "primjena ljekarni":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ljekarne.html";
          break; //works!!

        case "saloni":
        case "primjena salona":
          window.location.href =
            "../../pages/primjena-led-rasvjete/saloni.html";
          break; //works!!

        case "industrijska":
        case "industrijska led rasvjeta":
        case "primjena industrijske led rasvjete":
        case "primjena industrijske led":
        case "primjena industrijske rasvjete":
        case "primjena industrijske":
          window.location.href =
            "../../pages/primjena-led-rasvjete/industrijska-led-rasvjeta.html";
          break; //works!!

        case "obrti":
        case "radione":
        case "obrti radione":
        case "obrti i radione":
        case "primjena obrta i radiona":
        case "primjena obrta radiona":
        case "primjena obrta":
        case "primjena radiona":
          window.location.href =
            "../../pages/primjena-led-rasvjete/obrti-i-radione.html";
          break; //works!!

        case "sportski tereni":
        case "sportski":
        case "tereni":
        case "primjena sportskih terena":
        case "primjena sportskih":
        case "primjena terena":
          window.location.href =
            "../../pages/primjena-led-rasvjete/sportski-tereni.html";
          break; //works!!

        case "osiguranje objekata":
        case "osiguranje":
        case "primjena osiguranja objekata":
        case "primjena osiguranja":
        case "primjena objekata":
          window.location.href =
            "../../pages/primjena-led-rasvjete/osiguranje-objekata.html";
          break; //works!!

        case "bazeni":
        case "fontane":
        case "bazeni fontane":
        case "bazeni i fontane":
        case "primjena bazena i fontana":
        case "primjena bazena fontana":
        case "primjena bazena":
        case "primjena fontana":
          window.location.href =
            "../../pages/primjena-led-rasvjete/bazeni-i-fontane.html";
          break; //works!

        case "primjena ulične i parking":
        case "primjena ulicne i parking":
        case "primjena ulične rasvjete":
        case "primjena ulicne rasvjete":
        case "primjena parking rasvjete":
        case "primjena ulične":
        case "primjena ulicne":
        case "primjena parking":
          window.location.href =
            "../../pages/primjena-led-rasvjete/ulična-i-parking-rasvjeta.html";
          break; //works

        case "kućna rasvjeta":
        case "kucna rasvjeta":
        case "primjena kućne rasvjete":
        case "primjena kucne rasvjete":
          window.location.href =
            "../../pages/primjena-led-rasvjete/kućna-rasvjeta.html";
          break; //works!!

        case "vozila":
        case "primjena vozila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/vozila.html";
          break; //works!!

        case "plovila":
        case "primjena plovila":
          window.location.href =
            "../../pages/primjena-led-rasvjete/plovila.html";
          break; //works!!

        case "farme":
        case "primjena farme":
          window.location.href = "../../pages/primjena-led-rasvjete/farme.html";
          break; //works!!

        case "led proizvodi":
        case "proizvodi":
        case "svi proizvodi":
          window.location.href = "../../pages/led-proizvodi.html";
          break; //works!!

        case "led reflektori":
        case "reflektori":
          window.location.href =
            "../../pages/led-proizvodi/led-reflektori.html";
          break; //works!!

        case "led downlight":
        case "downlight":
          window.location.href = "../../pages/led-proizvodi/led-downlight.html";
          break; //works!!

        case "ulična rasvjeta":
        case "ulicna rasvjeta":
        case "ulična led rasvjeta":
        case "ulicna led rasvjeta":
        case "ulična led":
        case "ulična led":
        case "ulična":
        case "ulicna":
          window.location.href =
            "../../pages/led-proizvodi/ulična-led-rasvjeta.html";
          break; //works!

        case "linearna led rasvjeta":
        case "linearna rasvjeta":
        case "linearna led":
        case "linearna":
          window.location.href =
            "../../pages/led-proizvodi/linearna-led-rasvjeta.html";
          break; //works!!

        case "podvodna led rasvjeta":
        case "podvodna rasvjeta":
        case "podvodna led":
        case "podvodna":
          window.location.href =
            "../../pages/led-proizvodi/podvodna-led-rasvjeta.html";
          break; //works!!

        case "led cijevi":
        case "cijevi":
          window.location.href = "../../pages/led-proizvodi/led-cijevi.html";
          break; //works!!

        case "led paneli":
        case "paneli":
          window.location.href = "../../pages/led-proizvodi/led-paneli.html";
          break; //works!!

        case "led žarulje":
        case "led zarulje":
        case "žarulje":
        case "zarulje":
          window.location.href = "../../pages/led-proizvodi/led-žarulje.html";
          break; //works!!

        case "led moduli":
        case "moduli":
          window.location.href = "../../pages/led-proizvodi/led-moduli.html";
          break; //works!!

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
        case "kako se uvjeriti u prednosti ?":
        case "kako se uvjeriti u prednosti led ?":
        case "kako se uvjeriti u prednosti led":
          window.location.href = "../../pages/prednosti-led-rasvjete.html#info";
          break; //works!

        case "led rasvjeta na lizing":
        case "rasvjeta na lizing":
        case "led na lizing":
          window.location.href = "../../pages/news/led-rasvjeta-na-lizing.html";
          break; //works!!

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
        case "otkrice plave diode":
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
