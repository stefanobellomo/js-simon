/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

Consigli del giorno:

Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array
*/

// inserire 5 numeri generati casualmente
let numero1 = Math.ceil(Math.random(1) * 99);
let numero2 = Math.ceil(Math.random(1) * 99);
let numero3 = Math.ceil(Math.random(1) * 99);
let numero4 = Math.ceil(Math.random(1) * 99);
let numero5 = Math.ceil(Math.random(1) * 99);

console.log(numero1, numero2, numero3, numero4, numero5);


// creo una variabile timerEl e un contatore 
const timerEl = document.getElementById('timer')
let counter = 30

console.log(timerEl);
console.log(counter);


// imposto un timer di 30 secondi
const timeout = setInterval(() => {
   console.log(counter);
   
})
// dopo 30 secondi il timer smette di contare
// i numeri scompaiono
// appaiono all'utente 5 prompt in cui inserire i numeri precedente mostrati in ordine casuale
// appare un messaggio che indica quanti e quali numeri l'utente ha indovinato


