// Oppgave 1
const textToRemove = document.getElementById("remove");
const removeBtn = document.getElementById("remove-btn")

const removeText = () => {
    textToRemove.innerHTML = null;
}

removeBtn.addEventListener("click", removeText);


// Oppgave 2
const textToChange = document.getElementById("change");
const changeBtn = document.getElementById("change-btn");


const changeText = () => {
    textToChange.innerHTML = "Teksten er endret.";
}


changeBtn.addEventListener("click", changeText);


// Oppgave 3
const input = document.getElementById("input");
const inputText = document.getElementById("input-text");

const removeDefaultText = () => {
    inputText.innerHTML = null; 
}

removeDefaultText();

const updateText = (event) => {
    let letter = event.key;
    inputText.innerHTML += event.key;
}

input.addEventListener("keyup", updateText);

// Oppgave 4

const myList = ["item one", "item two", "item three"];

const ul = document.getElementById("ul");
const writeListBtn = document.getElementById("write-list");

writeList = () => {
    //myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));

    const liElements = myList.map((listElement) => `<li>${listElement}</li>`);
    ul.innerHTML = liElements.join(``);
}


writeListBtn.addEventListener("click",writeList);

// Oppgave 5
// Oppgave 6
// Oppgave 7
// Oppgave 8
