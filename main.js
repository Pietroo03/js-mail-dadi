


/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

let list = ['pietro.03@gmail.com', 'mario.rossi@gmail.com', 'miccoli10@libero.it', 'gianna.cassier@alice.it']

let request = prompt('Inserisci la tua mail')

if (list.includes(request)) {
    console.log('Benvenuto');
} else {
    console.log('La tua mail non è registrata, ci dispiace');
}