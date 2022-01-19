// TODO: Hent nødvendige elementer og knytt de til variabler
// Bruk let eller const
// const display = document.getElementById("display");

// TODO: Lag en variable for å lagre det som trykkes på / skrives
// Bruk let eller const

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

function updateDisplay(value) {
  // TODO: Oppdater kalkulatoren med det brukeren skriver eller resultat
  console.log(value);
}

function handleKey(event) {
  // TODO: Håndtere klikk på tastatur og trigg rett funksjon over
  // Hint: event gir deg tilgang til eventet
  // Her kan du bruke event til å sjekke hviken knapp på
  // tastaturen brukeren har trykket på
}

function handleButtonClick(event) {
  const element = event.target;
  const value = element.innerHTML;
  // if(element.closest("button")){
  //   console.log(value);
  //   updateDisplay(value);
  // }
  if(value === "c"){
    console.log(value);
  }else if(value === "="){
    console.log(value);
  }else if (value === "del"){
    console.log(value);
  }else if (element.closest("button")){
    updateDisplay(value);
  }else{
    return;
  }

  // TODO: Håndtere klikk på button og trigg rett funksjon over
  // Hint: event gir deg tilgang til eventet
  // Her kan du bruke event til å sjekke hviken button
  // brukeren trykket på
}

// TODO: Lytt til nødvendig "events" på HTML-elementer
document.addEventListener("click", handleButtonClick);