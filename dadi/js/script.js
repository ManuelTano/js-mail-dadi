// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  
// in console il risultato (ossia se ha vinto il computer o il player).


// Genero un numero random da 1 a 6 sia per il giocatore che per il computer

let umanscore = Math.floor(Math.random() * 6) + 1;
let pcscore = Math.floor(Math.random() * 6) + 1;

// Stabilisco il vincitore

if (umanscore > pcscore) {
    console.log('Ha vinto il giocatore!');
} else if (umanscore = pcscore) {
    console.log ('Pareggio!');
} else {
    console.log('Ha vinto il computer!');
}

