// 1) chiedere all’utente il numero di chilometri che vuole percorrere
let destination = parseInt(prompt('Inserisci qui il numero di KM che vuoi percorrere . .'));
console.log(destination); //DEBUG KM

// 2) l’età del passeggero.
let agePassenger = parseInt(prompt('Inserisci qui la tua età . .'));
console.log(agePassenger); //DEBUG ANNI

// 3) calcolare il prezzo totale del viaggio
// 4) L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


    // 3.1) il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticket = destination * 0.21;

ticket = ticket.toFixed(2);

console.log(ticket);
    
    // 3.2) va applicato uno sconto del 20% per i minorenni
if(agePassenger < 18){
    // Sconto per minorenni. 
    let youngDiscountTicket = ticket * 20 / 100; //"20%"
    ticket = ticket - youngDiscountTicket; 
    console.log(ticket); //DEBUG

    // 4.1)
    document.getElementById('price').innerHTML = 'Il prezzo del biglietto è scontato del 20% è : ' + ticket.toFixed(2) + '€';

    // 3.3) va applicato uno sconto del 40% per gli over 65.
} else if(agePassenger > 65){
    // Sconto per senior.
    let oldDiscountTicket = ticket * 40 / 100; //"40%"
    ticket = ticket - oldDiscountTicket;
    console.log(ticket); //DEBUG

    // 4.2)
    document.getElementById('price').innerHTML = 'Il prezzo del biglietto scontato del 40% è : ' + ticket.toFixed(2) + '€';

} else {
    // Prezzo comune
    ticket = destination * 0.21;
    
    // 4.3)
    document.getElementById('price').innerHTML = 'Il prezzo del biglietto è : ' + ticket.toFixed(2) + '€';
    console.log(ticket.toFixed(2));
}