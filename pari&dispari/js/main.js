/*
-chiedere all' utente se sceglie pari o dispari
-chiedere all' utente di inserire un numero da 1 a 5
-generare un numero random (sempre da 1 a 5) con funzione generica
-sommare i due numeri e vedere se somma è pari o dispari
-in base al risultato della somma mandare un messaggio all' utente di vittoria o sconfitta */

let sceltaUtente = prompt('Scegli pari o dispari?');
let numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log(sceltaUtente);
console.log(numeroUtente);

console.log(sommaNumeri(numeroUtente, generaNumeroRandom()));


if (sommaNumeri(numeroUtente, generaNumeroRandom()) % 2 === 0) {
    console.log('somma pari');

    if (sceltaUtente === 'pari') {
        alert('Hai vinto!');
    } else {
        alert('Hai perso!');
    }


}else if (sommaNumeri(numeroUtente, generaNumeroRandom()) % 2 !== 0) {
    console.log('somma dispari');

    if (sceltaUtente === 'dispari') {
        alert('Hai vinto!');
    } else {
        alert('Hai perso!');
    }
}








    function generaNumeroRandom() {
  let nComputer = Math.floor(Math.random() * 5) + 1;
    console.log(nComputer);
    return nComputer;
}


    function sommaNumeri(numeroUtente, nComputer) {
        let somma = numeroUtente + nComputer;
        console.log(somma);
        return somma;
    }

    







