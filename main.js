


/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

let list = ['pietro.03@gmail.com', 'mario.rossi@gmail.com', 'miccoli10@libero.it', 'gianna.cassier@alice.it']

let request = prompt('Inserisci la tua mail')

if (list.includes(request)) {
    console.log('Benvenuto');
} else {
    console.log('La tua mail non è registrata, ci dispiace');
}




/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

let player = Math.floor(Math.random() * 6) +1;
console.log(player);

let cpu = Math.floor(Math.random() * 6) +1;
console.log(cpu);

if (player > cpu) {
    console.log('Hai vinto');
} else if (cpu > player) {
    console.log('Hai perso');
} else {
    console.log('Pareggio'); 
}