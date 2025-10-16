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
let numero1 = Math.ceil(Math.random() * 99);
let numero2 = Math.ceil(Math.random() * 99);
let numero3 = Math.ceil(Math.random() * 99);
let numero4 = Math.ceil(Math.random() * 99);
let numero5 = Math.ceil(Math.random() * 99);

console.log(numero1, numero2, numero3, numero4, numero5);

// dichiaro i numel nella dom
const num1El = document.getElementById('numero1')
const num2El = document.getElementById('numero2')
const num3El = document.getElementById('numero3')
const num4El = document.getElementById('numero4')
const num5El = document.getElementById('numero5')

// creo una variabile timerEl e un contatore e message
const messageEl = document.getElementById('message')
const timerEl = document.getElementById('timer')
let counter = 30

// inserisci il counter nel timerEl
num1El.innerHTML = numero1;
num2El.innerHTML = numero2;
num3El.innerHTML = numero3;
num4El.innerHTML = numero4;
num5El.innerHTML = numero5;
timerEl.innerHTML = counter;

// imposto un timer di 30 secondi
const timeout = setInterval(() => {
   console.log(counter);

   if (counter === 0) {
      // dopo 30 secondi il timer smette di contare
      clearInterval(timeout);
      timerEl.innerHTML = counter
      // i numeri scompaiono
      num1El.classList.add('d-none')
      num2El.classList.add('d-none')
      num3El.classList.add('d-none')
      num4El.classList.add('d-none')
      num5El.classList.add('d-none')
   } else {
      timerEl.innerHTML = counter
   }

   counter--;

}, 100)

const formEl = document.querySelector('form')
const buttonEl = document.querySelector('.bottone')

buttonEl.addEventListener('click', (event) => {
   event.preventDefault()

   const numb = [numero1, numero2, numero3, numero4, numero5]
   const user_numb = [
      Number(document.getElementById('userNum1').value),
      Number(document.getElementById('userNum2').value),
      Number(document.getElementById('userNum3').value),
      Number(document.getElementById('userNum4').value),
      Number(document.getElementById('userNum5').value)
   ]
   // creo un terzo array in cui pusho i numeri indovinati
   const correct_numb = []

   // ciclo il primo array e controllo se ogni numero è incluso nel secondo array
   for (let i = 0; i < numb.length; i++) {
      // qui controllo quali numeri sono stati indovinati
      if (user_numb.includes(numb[i])) {
         // se è incluso lo pusho nel terzo array
         correct_numb.push(numb[i])
         // appare un messaggio che indica quanti e quali numeri l'utente ha indovinato
         messageEl.innerHTML = `hai indovinato ${correct_numb.length} numero/i: ${correct_numb}`
      } else {
         messageEl.innerHTML = `non hai indovinato nessun numero`
      }
   }
})

