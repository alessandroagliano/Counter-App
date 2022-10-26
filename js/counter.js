


let corpo = document.body;
let containerPrincipale = document.createElement('div');
containerPrincipale.classList.add('contatore')
containerPrincipale.classList.add('container-fluid')
corpo.appendChild(containerPrincipale)

/* -------------- div del counter -----------

Creo dinamicamente il div del counter
Aggiungo la classe container-principale al div counter
// appendo il counter al body 
*/

let counter = document.createElement('div');              
counter.classList.add('container-principale');          
containerPrincipale.appendChild(counter);                


    /* TitoloCounter
    
    ripeto lo stesso procedimento per il Title */
    let divtitle= document.createElement("div");         
    divtitle.classList.add('title');                     
   let title= document.createTextNode("Counter");        

   divtitle.appendChild(title);    // lo appendo al div 

   
   counter.appendChild(divtitle); /* inserimento del titlesul div del counter*/



   /* ---- Schermo contatore----
   anche qui creo tutto dinamicamente e stampo il valore iniziale di 0
   */
    var paragrafo= document.createElement("div");              
    paragrafo.classList.add("schermo") ;                    
    paragrafo.innerHTML= ' 0 ';                             
    
   counter.appendChild(paragrafo);          /* inserimento del div dello schermo sul div del counter*/



//--------------------- CONTAINER PER I PULSANTI ----------------------------

 

    /* container pulsanti */
    var containerPulsanti= document.createElement("div");
    containerPulsanti.classList.add("restoCounter")

    
   counter.appendChild(containerPulsanti);                 /* appendo il div dei Pulsanti al div del Counter */


    /* ---------------PULSANTE AGGIUNGI -------------
     -creo il div del pulsante
     -aggiungo la classe ''pulsanti''
     -creo il nodo di testo che inserirò nel div
     -appendo il testo creato per creare il pulsanti '' Aggiungi''
    */
    
    var pulsanteAggiungi= document.createElement("button");            
    pulsanteAggiungi.classList.add("pulsanti")                     
    var tastoAggiungi = document.createTextNode("+");                
    pulsanteAggiungi.appendChild(tastoAggiungi);     

 
  //--------------- funzionamento Pulsante aggiungi --------------

  /*  Ad ogni click del mouse il contatore incrementa di uno
  se il pulsante resta premuto il contatore aumenta velocemente fino a quando non rilascio il pulsante
  Tutto questo l'ho realizzato grazie al SetTimeout , al setInterval e agli eventi pointerdown,pointerup e pointermove*/  
      
        let contatore = 0
        let time;
        let raffica;

        /* con questa funzione  faccio incrementare il contatore di 1 richiamando la funzione
        aggiungi(); 
        poi con setTimeout faccio partire il contatore dopo 2 secondi grazie all'uso di setTimeout 
        che usa SetInterval per incrementarlo velocemente();  */

    function loopAggiungi() {   
        aggiungi();
        time=  setTimeout(() => {
            raffica = setInterval(aggiungi,30)
        }, 2000);
    };

  

let aggiungi =function() {                    // funzione che serve per incrementare di 1 il valore del contatore 

   contatore++ ;                              // incrementa il contatore di 1
   paragrafo.innerHTML = contatore;             // stampa il valore del contatore sullo schermo
 
}


    // con la funzione stoppa() faccio fermare il contatore  tramite il clearTimeout e clearInterval

    let stoppa = function (){
        
        clearTimeout(time)
        clearInterval(raffica);
    }
   
    // Aggiungo gli eventi pointerdown, pointerup e pointerout con le relative funzioni
        
        pulsanteAggiungi.addEventListener('pointerdown',loopAggiungi);  
        pulsanteAggiungi.addEventListener('pointerup',stoppa);
        pulsanteAggiungi.addEventListener('pointerout',stoppa);



        //----------------------- PULSANTE SOTTRAI --------------------//



   /*
   Per il pulsante sottrai ho seguito il ragionamento inverso del pulsante aggiungi
   quindi al click sottraggo */

    var pulsanteSottrai= document.createElement("button");
    pulsanteSottrai.classList.add("pulsanti");
    var tastoSottrai = document.createTextNode("-");
    pulsanteSottrai.appendChild(tastoSottrai);

    function loopSottrai() {
        sottrai();
        time=  setTimeout(() => {
            raffica = setInterval(sottrai,30)
        }, 2000);
    };

    let sottrai= function (){
  
        if (contatore > 0) {      // contatore > 0 in modo che non risulti mai negativo
            contatore--;   
        }
        paragrafo.innerHTML = contatore; 
    }

        pulsanteSottrai.addEventListener('pointerdown',loopSottrai);
        pulsanteSottrai.addEventListener('pointerup',stoppa);
        pulsanteSottrai.addEventListener('pointerout',stoppa);



 //----------------------- PULSANTE RESET --------------------//
   


    let reset = document.createElement('button');
    reset.classList.add('pulsanti');
    let testoReset = document.createTextNode('Reset');
    reset.appendChild(testoReset);

   
    

    /* con la funziona azzera() resetto il valore del contatore 
    do al contatore il valore 0 e lo stampo con innerHTML.
    Successivamente collego al click la funziona 'azzera()'  */

    function azzera (){
        contatore = 0;   // do al contatore il valore 0
        paragrafo.innerHTML = contatore; // lo stampo
       }

    reset.addEventListener('click' , azzera);



    //---------------BOTTONE CAMBIO COLORE --------------

    let bottone = document.createElement('button');
    bottone.classList.add('pulsanti');
    let testoColore = document.createTextNode('Mode');
    bottone.appendChild(testoColore);


/* al bottone imposto una if che dice: se la classe del body(corpo) è 'body' , la rimuovi e 
imposti la classe' colore-secondario' altrimenti rimuovi quella presente e aggiungi la classe
.body ( la principale).
tutto questo ad ogni click sul bottone*/


    function cambioColore () {
        if(corpo.className == "body") {
            corpo.classList.remove('body');
            corpo.classList.add('colore-secondario'); 
        } else  {corpo.classList.remove('colore-secondario')
    corpo.classList.add('body'); 
} 
}


bottone.addEventListener("click" , cambioColore);

//----------------------- RICONOSCIMENTI  --------------------//

let divRiconoscimenti = document.createElement('div');
divRiconoscimenti.classList.add('riconoscimenti');
let paragrafoRisconoscimenti = document.createElement('p');
 paragrafoRisconoscimenti.innerHTML = 'Prodotto da <a href="https://alessandroagliano.github.io/">Alessandro Aglianò</a>';
divRiconoscimenti.appendChild(paragrafoRisconoscimenti);

    // Appendo i vari pulsanti , in ordine, sul div genitore
    containerPulsanti.appendChild(pulsanteAggiungi);
    containerPulsanti.appendChild(reset);
    containerPulsanti.appendChild(pulsanteSottrai);
    containerPulsanti.appendChild(bottone);
    counter.appendChild(divRiconoscimenti);






