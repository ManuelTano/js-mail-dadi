// Crea (inventa) una lista di indirizzi mail autorizzati.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa in console un messaggio appropriato sull’esito del controllo. 
// ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);

// Creo una lista di indirizzi email autorizzati

let email = ["manueltano98@gmail.com", "t.manuel98@live.it", "lellykelly@alice.it", "sium@gmail.com"];

// Chiedo all'utente la sua email

let userEmail = prompt("Inserisci la tua email");

// Controllo che essa sia nella lista di chi può accedere

for (i = 0; i < email.length; i++) {

    if (email[i] === userEmail) {
        console.log('Benvenuto');
    } else if (email[i] !== userEmail)  {
        console.log ('Spiacenti');
    }
}

