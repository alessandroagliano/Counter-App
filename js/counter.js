const body = document.body;
body.classList.add("primary-color");

// FUNZIONE PER CREARE ELEMENTI DEL DOM
/* Funzione per creare dinamicamente ogni elemento del Counter
accetta 3 parametri: 
Il tagname dell'elemento
La classe da associare
Il div wrapper dove appendere l'elemento creato
Il testo dell'elemento */

function createElement(tagname, classe, genitore, text) {
  tagname = document.createElement(tagname);
  tagname.classList.add(classe);
  genitore.appendChild(tagname);
  text = text || ""; // il valore vuoto è per evitare la scritta 'undefined'
  var text = (tagname.innerHTML = text);
  return tagname;
}

const mainContainer = createElement("div", "main-container", body); // CONTENITORE PRINCIPALE
mainContainer.classList.add("container-fluid");

const counter = createElement("div", "counter", mainContainer); // DIV COUNTER
const title = createElement("div", "title", counter, "Counter"); //  Titolo Counter
const display = createElement("div", "display", counter, "0"); // Display del contatore
const buttonContainer = createElement("div", "button-container", counter); //CONTAINER PER I BOTTONI
const addButton = createElement("div", "button", buttonContainer, "+"); // Bottone Aggiungi
const resetButton = createElement("div", "button", buttonContainer, "Reset"); // Bottone Reset
const decreaseButton = createElement("div", "button", buttonContainer, "-"); // Bottone Sottrai
const modeButton = createElement("div", "button", buttonContainer, "Mode"); // Bottone Mode
const divOfRecognition = createElement(
  //RICONOSCIMENTI
  "div",
  "recognition",
  counter,
  'Produced by <a href="https://alessandroagliano.github.io/">Alessandro Aglianò</a>'
);
// ------------------------- FUNZIONI ----------------------

let valueOfCounter = 0;
let time;
let loop;
/* con questa funzione  faccio incrementare il contatore di 1 richiamando la funzione
        addCounterValue(); 
        poi con setTimeout faccio partire in loop la funzione 'addCounterValue ' dopo 1,5 secondi grazie all'uso di setTimeout 
        che usa SetInterval;  */

const loopAdd = function loopOfAddCounterValue() {
  addCounterValue();
  time = setTimeout(() => {
    loop = setInterval(addCounterValue, 30);
  }, 1500);
};

// funzione che serve per incrementare di 1 il valore del contatore
const addCounterValue = function () {
  valueOfCounter += 1; // incrementa il contatore di 1
  display.innerHTML = valueOfCounter; // stampa il valore del contatore sul display
};

/*
   Per il pulsante 'decreaseButton ' ho seguito il ragionamento inverso del pulsante 'AddButton
   quindi al click sottraggo */

const loopDecrease = function loopOfDecreaseCounterValue() {
  decreaseCounterValue();
  time = setTimeout(() => {
    loop = setInterval(decreaseCounterValue, 30);
  }, 1500);
};

const decreaseCounterValue = function () {
  if (valueOfCounter > 0) {
    // contatore > 0 in modo che non risulti mai negativo
    valueOfCounter -= 1;
  }
  display.innerHTML = valueOfCounter;
};

//FUNZIONE STOP LOOP
// con la funzione stopLoop() faccio fermare il loop del contatore  tramite il clearTimeout e clearInterval

const stopLoop = function () {
  clearTimeout(time);
  clearInterval(loop);
};

// FUNZIONE PER IL RESET
const resetCounter = function () {
  valueOfCounter = 0; // do al contatore il valore 0
  display.innerHTML = valueOfCounter; // lo stampo sul display
};

// FUNZIONE CAMBIO COLORE

/* al bottone imposto una if che dice: 
se la classe del body è 'primary-color' , la rimuovi e imposti la classe 'secondary-color' 
altrimenti rimuovi quella presente e aggiungi la classe 'primary-color'.
tutto questo ad ogni click sul bottone*/

function changeColor() {
  if (body.className == "primary-color") {
    body.classList.remove("primary-color");
    body.classList.add("secondary-color");
  } else {
    body.classList.remove("secondary-color");
    body.classList.add("primary-color");
  }
}

// FUNZIONI DA AGGIUNGERE ALL'EVENT LISTENER

/* clickButton function = questa funzione , in base all'elemento selezionato
resetta il contatore o cambia la color dell'applicazione*/

const clickButton = function (event) {
  if (event.target == resetButton) {
    resetCounter();
  } else if (event.target == modeButton) {
    changeColor();
  }
};

/* pointerDownButton = questa funzione, sempre in base all'elemento selezionato,
aumenta o diminuisce il valore del contatore*/
const pointerDownButton = function (event) {
  if (event.target == addButton) {
    loopAdd();
  } else if (event.target == decreaseButton) {
    loopDecrease();
  }
};
// pointerOutButton function = questa funzione attiverà la funzione 'stopLoop'
const pointerUpButton = function (event) {
  if (event.target == addButton || event.target == decreaseButton) {
    stopLoop();
  }
};
// pointerOutButton function = questa funzione attiverà la funzione 'stopLoop'

const pointerOutButton = function (event) {
  if (event.target == addButton || event.target == decreaseButton) {
    stopLoop();
  }
};

buttonContainer.addEventListener("click", clickButton);
buttonContainer.addEventListener("pointerdown", pointerDownButton);
buttonContainer.addEventListener("pointerup", pointerUpButton);
buttonContainer.addEventListener("pointerout", pointerOutButton);
