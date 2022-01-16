// TODO: Hent nødvendige elementer og knytt de til variabler
// Bruk let eller const
const enBtn = document.getElementById("1");
const toBtn = document.getElementById("2");
const treBtn = document.getElementById("3");
const fireBtn = document.getElementById("4");
const femBtn = document.getElementById("5");
const seksBtn = document.getElementById("6");
const syvBtn = document.getElementById("7");
const otteBtn = document.getElementById("8");
const niBtn = document.getElementById("9");
const nollBtn = document.getElementById("0");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const resetBtn = document.getElementById("reset");
const delBtn = document.getElementById("del");
const sumBtn = document.getElementById("sum");


let displayNumber = document.getElementById("display");

// TODO: Lag en variable for å lagre det som trykkes på / skrives
// Bruk let eller const
let keyPressed = 0;

function handleOperator() {
  // TODO: Lag en funksjon som du kan bruke til å håndtere regneoperasjonen
  // *, -, +, /
}

function calculate() {
  // TODO: Hent ut regneoperasjon (*, -, +, /)
  // TODO: Hent ut tallene (husk at det kan være ulike tallkombinasjoner)
  // Eks: 12+12, 1+1, 1+159
  // TODO: Kan være lurt å bruk handleOperator med operator og tallene

}

function clear() {
  // TODO: Nullstill kalkulatoren og variabelen hvor du lagrer informasjon
}

function updateDisplay() {
  // TODO: Oppdater kalkulatoren med det brukeren skriver eller resultat
}

function handleKey(event) {
  // TODO: Håndtere klikk på tastatur og trigg rett funksjon over
  // Hint: event gir deg tilgang til eventet
  // Her kan du bruke event til å sjekke hviken knapp på
  // tastaturen brukeren har trykket på
  if(event.keyCode === 49) {
    keyPressed = 1;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 50) {
    keyPressed = 2;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 51) {
    keyPressed = 3;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 52) {
    keyPressed = 4;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 53) {
    keyPressed = 5;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 54) {
    keyPressed = 6;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 55) {
    keyPressed = 7;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 56) {
    keyPressed = 8;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 57) {
    keyPressed = 9;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 48) {
    keyPressed = 0;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 48) {
    keyPressed = 0;
    displayNumber.innerHTML = keyPressed;
  }
  if(event.keyCode === 48) {
    keyPressed = 0;
    displayNumber.innerHTML = keyPressed;
  }
}


function handleButtonClick(event) {
  // TODO: Håndtere klikk på button og trigg rett funksjon over
  // Hint: event gir deg tilgang til eventet
  // Her kan du bruke event til å sjekke hviken button
  // brukeren trykket på
  if(event.keyCode === 49) {
    keyPressed = 1;
    displayNumber.innerHTML = keyPressed;
  }
}

// TODO: Lytt til nødvendig "events" på HTML-elementer
document.addEventListener("keyup", handleKey)
enBtn.addEventListener("click", handleButtonClick)