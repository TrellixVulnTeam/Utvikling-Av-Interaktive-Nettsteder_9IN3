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
    myList.forEach((listElement) => (ul.innerHTML += `<li>${listElement}</li>`));

}

writeListBtn.addEventListener("click",writeList);


// Oppgave 5
const select = document.getElementById("select");
const text = document.getElementById("text");
const htmlPlaceholder = document.getElementById("placeholder");
const createBtn = document.getElementById("create");

const createElement = () => {
    const htmlEl = select.value;
    const message = text.value;
    htmlPlaceholder.innerHTML += `<${htmlEl}>${message}</${htmlEl}>`;
}

createBtn.addEventListener("click", createElement);

// Oppgave 6
const list = document.getElementById("list");
const removeListBtn = document.getElementById("remove-li");

const removeList = () => {
    list.innerHTML = null;
}

removeListBtn.addEventListener("click", removeList);


// Oppgave 7
const inputName = document.getElementById("name");
const orderBtn = document.getElementById("order");

const handleKeyUp = () => {
    const name = inputName.value;
    
    if(name.length > 4) {
        orderBtn.disabled = true;
        orderBtn.style = "border: 1px solid red";
    } else {
        orderBtn.disabled = false;
        orderBtn.style = "border: 1px solid black";
    }
}

inputName.addEventListener("keyup", handleKeyUp);


// Oppgave 8
const ulParent = document.querySelector(".children");
const ulParentChildren = ulParent.querySelectorAll("li");
const colorBtn = document.getElementById("color");

const addBorder = () => {
    Array.from(ulParentChildren).forEach((li, index) => {
        console.log(li);
        li.style = "border: 1px solid blue; margin-bottom: 10px; padding: 5px";
        
        // if((index + 1) % 2 === 0) {
        //     li.style = "border: 1px solid pink; margin-bottom: 10px; padding: 5px;";
        // } else {
        //     li.style = "border: 1px solid green; margin-bottom: 10px; padding: 5px;";
        // }
    })
}

colorBtn.addEventListener("click", addBorder);