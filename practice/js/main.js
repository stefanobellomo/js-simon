
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


const timerEl = document.getElementById('timer')

let counter = 10

console.log(timerEl);
console.log(counter);



// estraggo il numero 10 e lo mettiamo in pagina

timerEl.innerHTML = counter;

// avviamo l'intervallo che deve scorrere da 10 a 0

const stop = setInterval(() => {

    console.log(counter);
    
// se la variabile è === 0 interrompo il contatore e stampo messaggio    
    if (counter === 0) {
        clearInterval(stop)
        timerEl.innerHTML = ('buon anno stronzo');
    } else {
        timerEl.innerHTML = counter;
    }

    counter--

}, 1000)