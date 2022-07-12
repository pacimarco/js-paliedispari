/* -chiedo parola utente
   -scompongo parola e la leggo in un array reverse
   -confronto parola utente con parola inversa
   -mando alert con risultato */


/*let parolaUtente = prompt("Inserisci la tua parola");

let parolaScomposta = parolaUtente.split("");
console.log(parolaScomposta);

parolaScomposta = parolaScomposta.reverse();
console.log(parolaScomposta);

let parolaInvertita = parolaScomposta.join("");
console.log(parolaInvertita);

if (parolaUtente === parolaInvertita) {
    alert("La parola inserita è palindroma");
}else {
    alert("La parola inserita non è palindroma");
} */


/* -chiedo parola utente
   -creo funzione più generica possibile per valutare/invertire la parola dell'utente
   -confronto parola utente con parola inversa
   -mando alert con risultato */


let parolaUtente = prompt("Inserisci la tua parola");

let parolaInversa = invertiParola(parolaUtente);

if(parolaUtente === parolaInversa){
    alert("La parola inserita è palindroma");
} else {
    alert("La parola inserita non è palindroma");
}

function invertiParola(str){
    let strInversa = str.split("").reverse().join("");
    return strInversa;
}
