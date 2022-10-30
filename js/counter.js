const body = document.body;
body.classList.add("primary-color");
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
mainContainer.classList.add("container-fluid");
body.appendChild(mainContainer);

/* -------------- div del counter -----------

Creo dinamicamente il div del counter
Aggiungo la classe 'counter'al div counter
Appendo il counter al body 
*/

const counter = document.createElement("div");
counter.classList.add("counter");
mainContainer.appendChild(counter);

/* TitoloCounter
    
    ripeto lo stesso procedimento per il Title */
const title = document.createElement("div");
title.classList.add("title");
const titleName = document.createTextNode("Counter");

// lo appendo al div
title.appendChild(titleName);

/* inserimento del title sul div del counter*/
counter.appendChild(title);

/* ---- Schermo contatore----
   anche qui creo tutto dinamicamente e stampo il valore iniziale di 0 */

const display = document.createElement("div");
display.classList.add("display");
display.innerHTML = " 0 ";

/* inserimento del div del display sul div del counter*/
counter.appendChild(display);

//--------------------- CONTAINER PER I BOTTONI ----------------------------

/* container bottoni */
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

/* appendo il div dei bottoni al div del Counter */
counter.appendChild(buttonContainer);

/* ---------------PULSANTE AGGIUNGI -------------
     -creo il div del Bottone
     -aggiungo la classe ''button''
     -creo il nodo di testo che inserirò nel div
     -appendo il testo creato per creare il pulsante 'addButton'
    */

const addButton = document.createElement("div");
addButton.classList.add("button");
const textAddButton = document.createTextNode("+");
addButton.appendChild(textAddButton);

//--------------- funzionamento Add Button --------------

/*  Ad ogni click del mouse il contatore incrementa di uno
  se il bottone resta premuto il contatore aumenta velocemente fino a quando non rilascio il pulsante
  Tutto questo l'ho realizzato grazie al SetTimeout , al setInterval e agli eventi pointerdown,pointerup e pointermove*/

let valueOfCounter = 0;
let time;
let loop;

/* con questa funzione  faccio incrementare il contatore di 1 richiamando la funzione
        addCounterValue(); 
        poi con setTimeout faccio partire il contatore dopo 2 secondi grazie all'uso di setTimeout 
        che usa SetInterval per incrementarlo velocemente();  */

const loopAdd = function loopToAddCounterValue() {
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

// con la funzione stopLoop() faccio fermare il contatore  tramite il clearTimeout e clearInterval

const stopLoop = function () {
  clearTimeout(time);
  clearInterval(loop);
};

// Aggiungo gli eventi pointerdown, pointerup e pointerout con le relative funzioni

addButton.addEventListener("pointerdown", loopAdd);
addButton.addEventListener("pointerup", stopLoop);
addButton.addEventListener("pointerout", stopLoop);

//----------------------- PULSANTE SOTTRAI --------------------//

/*
   Per il pulsante 'decrease Button ' ho seguito il ragionamento inverso del pulsante 'Add Button
   quindi al click sottraggo */

const decreaseButton = document.createElement("div");
decreaseButton.classList.add("button");
const textDecreaseButton = document.createTextNode("-");
decreaseButton.appendChild(textDecreaseButton);

const loopDecrease = function loopToDecreaseCounterValue() {
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

decreaseButton.addEventListener("pointerdown", loopDecrease);
decreaseButton.addEventListener("pointerup", stopLoop);
decreaseButton.addEventListener("pointerout", stopLoop);

//----------------------- PULSANTE RESET --------------------//

const resetButton = document.createElement("div");
resetButton.classList.add("button");
const textResetButton = document.createTextNode("Reset");
resetButton.appendChild(textResetButton);

/* con la funziona stopLoop() resetto il valore del contatore 
    do al contatore il valore 0 e lo stampo con innerHTML.
    Successivamente collego al click la funzion 'stopLoop()'  */

const reset = function () {
  valueOfCounter = 0; // do al contatore il valore 0
  display.innerHTML = valueOfCounter; // lo stampo
};

resetButton.addEventListener("click", reset);

//---------------BOTTONE CAMBIO COLORE --------------

const modeButton = document.createElement("div");
modeButton.classList.add("button");
const textModeButton = document.createTextNode("Mode");
modeButton.appendChild(textModeButton);

/* al bottone imposto una if che dice: se la classe del body è 'primary-color' , la rimuovi e 
imposti la classe 'secondary-color' altrimenti rimuovi quella presente e aggiungi la classe
'.primary-color'.
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

modeButton.addEventListener("click", changeColor);

//----------------------- RICONOSCIMENTI  --------------------//

const divOfRecognition = document.createElement("div");
divOfRecognition.classList.add("recognition");
const recognitionParagraph = document.createElement("p");
recognitionParagraph.innerHTML =
  'Produced by <a href="https://alessandroagliano.github.io/">Alessandro Aglianò</a>';
divOfRecognition.appendChild(recognitionParagraph);

// Appendo i vari pulsanti , in ordine, sul div genitore
buttonContainer.appendChild(addButton);
buttonContainer.appendChild(resetButton);
buttonContainer.appendChild(decreaseButton);
buttonContainer.appendChild(modeButton);
counter.appendChild(divOfRecognition);
