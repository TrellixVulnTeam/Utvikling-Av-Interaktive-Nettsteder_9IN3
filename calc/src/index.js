// TODO: Hent nødvendige elementer og knytt de til variabler
// Bruk let eller const
const display = document.getElementById("display");
const availableOperators = ["*", "/", "-", "+"];
const userInput = [];

// TODO: Lag en variable for å lagre det som trykkes på / skrives
// Bruk let eller const


function handleOperator(operator,one,two) {
  // TODO: Lag en funksjon som du kan bruke til å håndtere regneoperasjonen
  // *, -, +, /
  switch(operator) {
    case "/":
      return Number(one) / Number(two);
    case "+":
      return Number(one) + Number(two)
    case "*":
      return Number(one) * Number(two)
    case "-":
      return Number(one) - Number(two)
    default:
      break;
  }
}

function calculate() {
  // TODO: Hent ut regneoperasjon (*, -, +, /)
  // TODO: Hent ut tallene (husk at det kan være ulike tallkombinasjoner)
  // Eks: 12+12, 1+1, 1+159
  // TODO: Kan være lurt å bruk handleOperator med operator og tallene
  // const operator = userInput.find();
  // let operator = userInput.find((value) => {console.log(value)})
  let operator = null;
  for(let i = 0; i < userInput.length; i++){
    let value = userInput[i];
    if(availableOperators.includes(value)){
      operator = value;
    }
  }
  // console.log(operator);

  const values = userInput.join("").split(operator);
  const result = handleOperator(operator, values[0], values[1]);
  console.log(result);
}


function clear() {
  // TODO: Nullstill kalkulatoren og variabelen hvor du lagrer informasjon
  display.innerHTML = "";
}

function updateDisplay(value) {
  // TODO: Oppdater kalkulatoren med det brukeren skriver eller resultat
  userInput.push(value);
  display.innerHTML += value;
  // console.log(value);
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
    clear();
    // console.log(value);
  }else if(value === "="){
    const result = calculate();
    display.innerHTML = result;
    // console.log(value);
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