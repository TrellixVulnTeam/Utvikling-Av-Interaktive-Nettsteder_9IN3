// TODO: Bruk getElementById til å hente HTML med #id
// TODO: Bruk querySelector til å hente knappen
const numbersUl = document.getElementById("numbers");
const guessUl = document.getElementById("guess");
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [1, 5, 6, 3, 7, 2, 4];

const getGuess = () => {
  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  const answers = document.querySelectorAll("guessUl");
  // TODO: Bruk .map for å hente ut verdiene i input feltene
  return Array.from(answers).map();
};

const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = numbers.sort().join("") === guess.join("");
  if (isCorrect) {
    alert("Du sorterte riktig");
  }
};

const addInputUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
  for (let element of numbers) {
    const li = `<li> ${element}</li>`;
    guessUl.innerHTML += li;
  }
  console.log(guessUl);

};


const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  for (let value of numbers) {
    const li = value;
    numbersUl.innerHTML += `${li}, `;
  }
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();

button.addEventListener("click", checkNumberSeq);
