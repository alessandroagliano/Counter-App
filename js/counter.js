const body = document.body;
body.classList.add("primary-color");
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
mainContainer.classList.add("container-fluid");
body.appendChild(mainContainer);

/* -------------- div del counter -----------

Creo dinamicamente il div del counter
Aggiungo la classe container-principale al div counter
// appendo il counter al body 
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
   anche qui creo tutto dinamicamente e stampo il valore iniziale di 0
   */
const display = document.createElement("div");
display.classList.add("display");
display.innerHTML = " 0 ";

/* inserimento del div dello schermo sul div del counter*/
counter.appendChild(display);

//--------------------- CONTAINER PER I PULSANTI ----------------------------

/* container pulsanti */
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");

/* appendo il div dei Pulsanti al div del Counter */
counter.appendChild(buttonContainer);

/* ---------------PULSANTE AGGIUNGI -------------
     -creo il div del pulsante
     -aggiungo la classe ''pulsanti''
     -creo il nodo di testo che inserirò nel div
     -appendo il testo creato per creare il pulsanti '' Aggiungi''
    */

const addButton = document.createElement("div");
addButton.classList.add("button");
const textAddButton = document.createTextNode("+");
addButton.appendChild(textAddButton);

//--------------- funzionamento Pulsante aggiungi --------------

/*  Ad ogni click del mouse il contatore incrementa di uno
  se il pulsante resta premuto il contatore aumenta velocemente fino a quando non rilascio il pulsante
  Tutto questo l'ho realizzato grazie al SetTimeout , al setInterval e agli eventi pointerdown,pointerup e pointermove*/

let contatore = 0;
let time;
let raffica;

/* con questa funzione  faccio incrementare il contatore di 1 richiamando la funzione
        aggiungi(); 
        poi con setTimeout faccio partire il contatore dopo 2 secondi grazie all'uso di setTimeout 
        che usa SetInterval per incrementarlo velocemente();  */

const loopAddCounterValue = function () {
  addCounterValue();
  time = setTimeout(() => {
    raffica = setInterval(addCounterValue, 30);
  }, 2000);
};

// funzione che serve per incrementare di 1 il valore del contatore
const addCounterValue = function () {
  contatore += 1; // incrementa il contatore di 1
  display.innerHTML = contatore; // stampa il valore del contatore sullo schermo
};

// con la funzione stoppa() faccio fermare il contatore  tramite il clearTimeout e clearInterval

const stopLoop = function () {
  clearTimeout(time);
  clearInterval(raffica);
};

// Aggiungo gli eventi pointerdown, pointerup e pointerout con le relative funzioni

addButton.addEventListener("pointerdown", loopAddCounterValue);
addButton.addEventListener("pointerup", stopLoop);
addButton.addEventListener("pointerout", stopLoop);

//----------------------- PULSANTE SOTTRAI --------------------//

/*
   Per il pulsante sottrai ho seguito il ragionamento inverso del pulsante aggiungi
   quindi al click sottraggo */

const decreaseButton = document.createElement("div");
decreaseButton.classList.add("button");
const textDecreaseButton = document.createTextNode("-");
decreaseButton.appendChild(textDecreaseButton);

const loopDecreaseCounterValue = function () {
  decreaseCounterValue();
  time = setTimeout(() => {
    raffica = setInterval(decreaseCounterValue, 30);
  }, 2000);
};

const decreaseCounterValue = function () {
  if (contatore > 0) {
    // contatore > 0 in modo che non risulti mai negativo
    contatore -= 1;
  }
  display.innerHTML = contatore;
};

decreaseButton.addEventListener("pointerdown", loopDecreaseCounterValue);
decreaseButton.addEventListener("pointerup", stopLoop);
decreaseButton.addEventListener("pointerout", stopLoop);

//----------------------- PULSANTE RESET --------------------//

const resetButton = document.createElement("div");
resetButton.classList.add("button");
const textResetButton = document.createTextNode("Reset");
resetButton.appendChild(textResetButton);

/* con la funziona azzera() resetto il valore del contatore 
    do al contatore il valore 0 e lo stampo con innerHTML.
    Successivamente collego al click la funziona 'azzera()'  */

const reset = function () {
  contatore = 0; // do al contatore il valore 0
  display.innerHTML = contatore; // lo stampo
};

resetButton.addEventListener("click", reset);

//---------------BOTTONE CAMBIO COLORE --------------

const modeButton = document.createElement("div");
modeButton.classList.add("button");
const textModeButton = document.createTextNode("Mode");
modeButton.appendChild(textModeButton);

/* al bottone imposto una if che dice: se la classe del body(corpo) è 'body' , la rimuovi e 
imposti la classe' colore-secondario' altrimenti rimuovi quella presente e aggiungi la classe
.body ( la principale).
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
