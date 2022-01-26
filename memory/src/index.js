// import "./styles.css";

/**
 *
 * Prosessen:
 *
 * Starte med HTML for å få strukturen, tenk hvordan dele opp og hvordan vi skal style
 * Deretter starte med layout av designet
 *
 * Neste blir å hente ut elementer vi vet vi skal ha interaskjon med
 *
 * For at vi skal kunne starte spillet må vi
 *  - lage X antall bokser
 *  - velge et utvalg bokser som vi skal kunne klikke på
 *  - lytte til klikk på boksene
 *  - oppdatere antall feil / score basert på hva vi klikket på
 *
 * For hvert klikk må vi vurdere om spillet er ferdig (klart alle eller brukt alle forsøk)
 *  - Hvis klart alle, gjør spillet vanskeligere
 *  - Hvis brukt alle forsøk, vis starte på nytt knappen
 *
 * Når vi avanserer kan vi oppdatere settings:
 *  - Slik at det blir flere farget bokser
 *  - Flere bokser
 *  - Færre forsøk
 *  - Dårligere tid
 *
 * Når vi starter på nytt må vi:
 *  - Gjenbruke settingen vi startet med
 *  - Nullstille alt som endrer seg når vi spiller
 *
 */

const round = document.getElementById("round");
const correct = document.getElementById("correct");
const fail = document.getElementById("fail");
const grid = document.getElementById("grid");

const settings = {
  boxes: 15,
  attempts: 10,
  preview: 2,
  duration: 3
};

const rounds = [];
let numberOfFail = 0;
let numberOfCorrect = 0;

// Lage bokser basert på boxes i settings.

const createBoxes = (amount) => {
  const boxes = [];
  const emptyBoxes = new Array(settings.boxes).fill(null);
  emptyBoxes.forEach((_, index) => {
    const button = document.createElement("button");
    button.classList.add("box");
    button.dataset.id = `box-${index}`;
    button.innerHTML = "";
    boxes.push(button);
  });

  boxes.forEach((box) => grid.appendChild(box));
}
// Lager alle boksene
createBoxes()

const getRandom = (max) => {
  return Math.floor(Math.random() * max)
}

const setPreview = () => {
  const boxes = Array.from(document.querySelectorAll(".box"));
  const selected = [];
  for (let index = 0; index < settings.preview; index++) {
    let box = boxes[getRandom(boxes.length)];
    box.classList.add("preview");
  }
  return selected;
}

const render = () => {
  setPreview();
  setTimeout(() => {
    const boxes = Array.from(document.querySelectorAll(".box"));
    boxes.forEach(box => box.classList.add("off"));
  }, settings.duration*1000);

}


const handleClick = (event) => {
  // Sjekker hva som blir trykket
  const element = event.target;
  if(element && element.classList.contains("preview")){
    console.log("correct");
    element.classList.remove("off")
    element.classList.add("success");
    element.disabled = true;
    numberOfCorrect += 1;
    correct.innerHTML = `${numberOfCorrect} / ${settings.preview}`
  } else if(element && element.classList.contains("box")){
    console.log("fail");
    element.classList.remove("off")
    element.classList.add("fail");
    numberOfFail += 1;
    fail.innerHTML = `${numberOfFail} / ${settings.attempts}`
  }

  // Lage et utvalg bokser som skal være riktige

  // Avgjøre om jeg har trykket på RIKTIG boks
    // Oppdatere antall riktig
    // Oppdatere stylen

  // Avgjøre om jeg har trykket på FEIL boks
    // Oppdatere antall Feil
    // Oppdatere stylen

  // Avgjøre om spillet er ferdig
  if(numberOfCorrect === settings.preview) {
    console.log("Ferdig")
  }

  if(numberOfFail >= settings.attempts) {
    console.log("Gave Over!")
  }
    // Bli nødt til å starte spillet på nytt
    // Avansere


  // console.log(element);
}

// Rendrer starten på spillet. 
render();

// Lytte etter klikk
document.addEventListener("click", handleClick)


// For å finne ut at det er ikke trykket på samme
const arr1 = [1, 2, 4];
const arr2 = [1, 2, 3];

const findUniqueValue = (arr1, arr2) => {
  return arr1.filter((currentValue) => !arr2.includes(currentValue));
}

let notSharedValues = arr1
  .filter((arr1value) => !arr2.includes(arr1value))
  .concat(arr2.filter((arr2value) => !arr1.includes(arr2value)));

console.log(notSharedValues);


// // const createBoxes = (amount) => {
// //   const squares = [];
// //   new Array(amount).fill(null).forEach((_, index) => {
// //     // TODO: Lag knappen
// //     const button = null;
// //     // Gi knappen en klasse square
// //     // Gi knappen en tom streng som innhold
// //     button.dataset.id = `square-${index}`;
// //     // TODO: Oppdater squares med den nye knappen
// //   });
// //   return squares;
// // };

// // TODO: Sett #grid til å være en tom streng eller null
// const resetGrid = () => {};

// // TODO: Legg knappene du har laget til #grid
// // HINT: .appendChild og en form for løkke
// const addBoxesGrid = (squares) => {};

// // Funksjon brukt for å velge et tall random fra 0 til max
// const getRandom = (max) => {
//   return Math.floor(Math.random() * max);
// };

// // Funksjon brukt til å fjerne visningen av hvilke bokser som er riktig
// const removeColorBoxes = (boxes) => {
//   // TODO: Gi alle elementer i boxes en klasse "color-opeque"
//   // HINT: classList og en form for løkke
// };

// // Funksjon brukt til å disable boksene før spillet har startet
// const disableBoxes = (boxes) => {
//   // TODO: Disable boksene
//   // HINT: .disabled
// };

// const enableBoxes = (boxes) => {
//   // TODO: Enable boksene
//   // HINT: .disabled
// };

// const setColorBoxes = (boxes) => {
//   // TODO: Gi alle elementer i boxes en klasse "color"
//   // HINT: classList og en form for løkke
// };

// // TODO: Velg et utvalg bokser
// const setSelected = (squares) => {
//   const selected = [];
//   for (let i = 0; i < settings.colorized; i++) {
//     // TODO: velg en random boks fra squares
//     // TODO: Oppdater selected med denne boksen
//   }
//   return selected;
// };

// // Funksjon brukt for klargjøre spillet
// const render = () => {
//   // TODO: Lag boksene basert på settings.squares. HINT: createBoxes
//   // TODO: Bruk funksjonen som legger boksene til #grid. HINT: addBoxesGrid
//   // TODO: Bruk funksjonen som trekker et utvalg basert på antall bokser. HINT: setSelected
//   const selected = null;
//   // TODO: Disable alle boksene. HINT: disableBoxes
//   // TODO: Vis hvilke bokser som er riktig. HINT: setColorBoxes
//   setTimeout(() => {
//     // TODO: Fjern fargen på valgte bokser. HINT: removeColorBoxes
//     // TODO: Gjør alle boksene aktive igjen. HINT: enableBoxes
//   }, settings.duration * 1000);
// };

// // Funksjon brukt for å avansere
// const advance = () => {
//   score.push({ score: 0, fail: 0 });
//   // TODO: Gjør endringer på nøkler / keys / props på setting
//   // EKS: settings.attempts -= 1

//   // TODO: Nullstill grid. HINT: resetGrid
//   // TODO: Trigg render på nytt
// };

// // TODO: Oppdater denne rundens score
// // HINT: Bruk score, settings.level og "key": score
// const updateScore = () => {};

// // TODO: Oppdater denne rundens fail
// // HINT: Bruk score, settings.level og "key": fail
// const updateFail = () => {};

// // TODO: sjekk om score er lik settings.colorized
// const roundComplete = () => {};

// // TODO: Sjekk om antall feil er mer en settings.attempts
// const roundFailed = () => {};

// // Funksjon brukt for å håndtere klikk
// const handleClick = (event) => {
//   if (event.target && event.target.classList.contains("color")) {
//     // TODO: Bruk updateScore
//   } else if (event.target && Object.keys(event.target.dataset).includes("id")) {
//     // TODO: Bruk updateFail
//   }
//   showScore();

//   // TODO: Sjekk om runden er ferdig. Hvis tilfelle gjør nødvendig handling
//   // HINT: roundComplete
//   if ("legg_til_en_betingelse") {
//     // TODO: advance
//   }

//   // TODO: Sjekk om for mange feil. Hvis tilfelle gjør nødvendig handling
//   // HINT: roundFailed
//   if ("legg_til_en_annen_betingelse") {
//     // TODO: Gjør det mulig å starte på nytt
//   }
// };

// // Funksjon brukt for å starte spillet første gang eller når vi trykker på "start på nytt"
// const start = () => {
//   score.push({ score: 0, fail: 0 });
//   render();
//   showScore();
// };

// start();

// // TODO: Lytt til klikk globalt
// // TODO: Knytt denne til handleClick
