/* 
    Mail
        Chiedi all’utente la sua email,
        controlla che sia nella lista di chi può accedere,
        stampa un messaggio appropriato sull’esito del controllo.
        Note: il controllo vorrei che fosse effettuato manualmente con un ciclo for e non usando funzionalità built-in degli array in js :)

    Gioco dei dadi
        Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
        Stabilire il vincitore, in base a chi fa il punteggio più alto.
        
    Consigli generali
        Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
    Consigli del giorno:
        scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
        javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare attraverso le nostre istruzioni
        si, ma noi cosa vogliamo fare?
        torniamo a scrivere in italiano
        proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
        usiamo i diagrammini e i discorsi filosofici di oggi come base per costruire un nostro sistema di implementazione autonomo 
*/

// Inizializzo un array con dento una lista di email
const mailLists = 
['cochy@gmail.com', 
'pincopallo@libero.it', 
'pasqualino@gmail.com', 
'giovanni88@outlook.com', 
'tommaso99@live.it'];

// vado a leggere input email
const inputEmail = document.getElementById('email-user');

const outMessage = document.getElementById('output-message');

// Quando su un button preso via id, ho un evento di tipo listner, esegui la funzione
document.getElementById('submit').addEventListener('click', function(){
    for (var i = 0; i < mailLists.length; i++){
        // prendo la mail immessa nell'input, la trasformo in minuscolo, elimino gli spazi e la confronto con quelle della lista 
        if (inputEmail.value.toLowerCase().trim() == mailLists[i]){
            console.log('email presente nella lista');
            outMessage.classList.remove('d-none', 'alert-warning');
            outMessage.classList.add('d-block', 'alert-success');
            outMessage.innerHTML = 'email presente nella lista';
            return;
        }
        else{
            console.log('email non presente');
            outMessage.classList.remove('d-none', 'alert-success');
            outMessage.classList.add('d-block', 'alert-warning');
            outMessage.innerHTML = 'email non presente';
        }
    }
});


const outGameMessage = document.getElementById('output-game-message');

// Leggo lo stato del pulsante di gioco
const btnStartGame = document.getElementById('start-game');
btnStartGame.addEventListener('click', function(){
    // Genero un numero casuale da 1 a 6
    let numberUser = Math.floor(Math.random() * 7);
    let numberPc = Math.floor(Math.random() * 7);
    if (numberUser > numberPc){
        console.log('Hai vinto!');
        outGameMessage.classList.remove('d-none', 'alert-danger', 'alert-warning');
        outGameMessage.classList.add('d-block', 'alert-success');
        outGameMessage.innerHTML = `Hai vinto! Il tuo numero è: ${numberUser}`;
    }

    else if (numberUser < numberPc){
        console.log('Hai perso! Ritenta sarai piu fortunato.');
        outGameMessage.classList.remove('d-none', 'alert-success', 'alert-warning');
        outGameMessage.classList.add('d-block', 'alert-danger');
        outGameMessage.innerHTML = `Hai perso! Ritenta sarai piu fortunato. Il numero del PC è: ${numberPc}`;
    }

    else if (numberUser == numberPc){
        console.log('La scelta dell\'utente e del PC è la stessa');
        outGameMessage.classList.remove('d-none', 'alert-success', 'alert-danger');
        outGameMessage.classList.add('d-block', 'alert-warning');
        outGameMessage.innerHTML = `Attenzione, la scelta dell'utente è la stessa del PC. Il numero scelto è: ${numberUser}`;
    }
});