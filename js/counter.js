


let corpo = document.body;
let containerPrincipale = document.createElement('div');
containerPrincipale.classList.add('contatore')
containerPrincipale.classList.add('container-fluid')
corpo.appendChild(containerPrincipale)

/*  div del counter */

let counter = document.createElement('div');  // Creo dinamicamente il div del counter
counter.classList.add('container-principale'); // Aggiungo la classe container-principale al div counter
containerPrincipale.appendChild(counter);  // appendo il counter al body 

    /* TitoloCounter*/
    let divtitle= document.createElement("div"); // creo dinamicamente un div per il titolo
    divtitle.classList.add('title');  // Aggiungo la classe '' title '' al div 
   let title= document.createTextNode("Counter");  // creo il nodo di testo ''Counter

   divtitle.appendChild(title); // lo appendo al div 

   
   counter.appendChild(divtitle); /* inserimento del titlesul div del counter*/
/* div schermo del  contatore*/
    var paragrafo= document.createElement("div"); // creo dinamicamente il div dove proietto il valore del contatore
    paragrafo.classList.add("schermo") ; // aggiungo la classe '' schermo '' al div 
    paragrafo.innerHTML= ' 0 ';   // imposto come valore iniziale lo 0 
    
   counter.appendChild(paragrafo);   /* inserimento del div dello schermo sul div del counter*/



//--------------------- CONTAINER PER I PULSANTI ----------------------------

 

    /* container pulsanti */
    var containerPulsanti= document.createElement("div");
    containerPulsanti.classList.add("restoCounter")

    
   counter.appendChild(containerPulsanti);  /* appendo il div dei Pulsanti al div del Counter */


    /* pulsante aggiungi */
    var pulsanteAggiungi= document.createElement("div");  // creo il div del pulsanti
    pulsanteAggiungi.classList.add("pulsanti")   // aggiungo la classe ''pulsanti ''
    var tastoAggiungi = document.createTextNode("+");  // creo il nodo di testo che inserirò nel div
    pulsanteAggiungi.appendChild(tastoAggiungi); // appendo il testo creato per creare il pulsanti '' Aggiungi''

 
  //--------------- funzionamento Pulsante aggiungi --------------

  /* la mia intenzione è che al click del pulsante incrementavo il valore di 1 al counter.
  Se il click del mouse restava premuto il counter iniziava a incrementare velocemente fino a quando
  non rilasciavo il click.
  Tutto questo l'ho realizzato grazie al SetTimeout , al setIntervale e agli eventi mousedown e mouseup.
  */
      
        let contatore = 0
        let time;
        let raffica;

        /* con questa funzione  faccio incrementare il contatore di 1 richiamando la funzione
        aggiungi(); 
        poi con setTimeout faccio partire il contatore dopo 2 secondi grazie all'uso di setTimeout 
        che usa SetInterval per incrementare il contatore velocemente();
        */
    function ripetiAggiungi(event) {   
        aggiungi();
        time=  setTimeout(() => {
            raffica = setInterval(aggiungi,30)
        }, 2000);
    };

  

let aggiungi =function() {   // funzione che serve per incrementare di 1 il valore del contatore 

   contatore++ ;  // incrementa il contatore di 1
   paragrafo.innerHTML = contatore;   // stampa il valore del contatore sullo schermo
 
}


    /* con la funzione stoppa() faccio fermare il contatore sia che incremento di 1
    sia se faccio partire il setInterval grazie al clearTimeout e clearInterval
    */

    let stoppa = function (){
        
        clearTimeout(time)
        clearInterval(raffica);
    }
   
    // Aggiungo gli eventi mousedown e mouseup con le relative funzioni
        
        pulsanteAggiungi.addEventListener('pointerdown',ripetiAggiungi);  
        pulsanteAggiungi.addEventListener('pointerup',stoppa);
        pulsanteAggiungi.addEventListener('pointerout',stoppa);

        /* come elemento ho seleziona document. perchè prevenire il mouseup fuori il Div del pulsante
    


        //----------------------- PULSANTE SOTTRAI --------------------//



   /*
   Per il pulsante sottrai ho seguito il ragionamento inverso del pulsante aggiungi
   quindi al click sottraggo */

    var pulsanteSottrai= document.createElement("div");
    pulsanteSottrai.classList.add("pulsanti");
    var tastoSottrai = document.createTextNode("-");
    pulsanteSottrai.appendChild(tastoSottrai);

    



    function ripetiSottrai() {
        sottrai();
        time=  setTimeout(() => {
            raffica = setInterval(sottrai,30)
        }, 2000);
    };

  
/* Per la funzione sottrai() ho soltanto messo la condizione che il valore del contatore dev'essere
maggiore di 0 per non andare in negativo.
*/
    let sottrai= function (){
  
        if (contatore > 0) {
            contatore--;   
        }
        paragrafo.innerHTML = contatore; 
    }


    
 
   
        pulsanteSottrai.addEventListener('pointerdown',ripetiSottrai);
        document.addEventListener('pointerup',stoppa);
        pulsanteSottrai.addEventListener('pointerout',stoppa);)



 //----------------------- PULSANTE RESET --------------------//
   


    let reset = document.createElement('div');
    reset.classList.add('pulsanti');
    let testoReset = document.createTextNode('Reset');
    reset.appendChild(testoReset);

    containerPulsanti.appendChild(pulsanteAggiungi);
    containerPulsanti.appendChild(reset);
    containerPulsanti.appendChild(pulsanteSottrai);
    

    // con la funziona azzera() resetto il valore del contatore
    function azzera (){
        contatore = 0;   // do al contatore il valore 0
        paragrafo.innerHTML = contatore; // lo stampo
       }

    

    reset.addEventListener('click' , azzera);

    //---------------BOTTONE CAMBIO COLORE --------------



    let bottone = document.createElement('div');
    bottone.classList.add('pulsanti');
    let testoColore = document.createTextNode('Mode');
    bottone.appendChild(testoColore);



let cambiatutto = function() {
    this.className.add('coloresecondario');
}


    function cambioColore3 () {
        if(corpo.className == "body") {
            corpo.classList.remove('body');
            corpo.classList.add('colore-secondario');
            for (let i = 0; i <4; i++) {
                tuttiPulsanti[i].classList.add('pulsanti2');   
            }
        } else  {corpo.classList.remove('colore-secondario')
    corpo.classList.add('body');

    for (let i = 0; i <4; i++) {
       
        tuttiPulsanti[i].classList.remove('pulsanti2');   
    }
} 
}


bottone.addEventListener("click" , cambioColore3);


let divRiconoscimenti = document.createElement('div');
divRiconoscimenti.classList.add('riconoscimenti');
let paragrafoRisconoscimenti = document.createElement('p');
let riconoscimenti = document.createTextNode('Prodotto da Alessandro Aglianò');
paragrafoRisconoscimenti.appendChild(riconoscimenti);
divRiconoscimenti.appendChild(paragrafoRisconoscimenti);

    // Appendo i vari pulsanti , in ordine, sul div genitore
    containerPulsanti.appendChild(pulsanteAggiungi);
    containerPulsanti.appendChild(reset);
    containerPulsanti.appendChild(pulsanteSottrai);
    containerPulsanti.appendChild(bottone);
    counter.appendChild(divRiconoscimenti);



  let tuttiPulsanti= document.querySelectorAll('.pulsanti');
  console.log(tuttiPulsanti);

  
let cambioSfondo = function() {
    
        this.classList.add('body');   
    
}

for (let i = 0; i <4; i++) {
    tuttiPulsanti[i].addEventListener('mouseover', cambioSfondo);   
}


