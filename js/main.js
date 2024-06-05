//1) Controllare anni e senioriti
//2) Stampare in console i risultati

document.getElementById('conferma').addEventListener('click',
  function(){

    console.log('click');//Test

    // KM Registrati
    const km = document.getElementById("destination").value;
    console.log(km);

    // Età
    const age = document.querySelector('select#seniority').value;
    console.log(age);

   


    //Calcolo prezzo in base alla seniority
    if(age != 0){

        //Calcolo del prezzo
        let priceN = km * 0.21;
        console.log(priceN);//Test Calcolo prezzo
        
        if(age === "minorenne"){
            priceN = (priceN * 0.8).toFixed(2);
            console.log(priceN);//Test Minorenne
        } else if(age === "senior") {
            priceN = (priceN * 0.6).toFixed(2);
            console.log(priceN)
        } else {
            console.log(priceN);
        }
    } else {
        alert('Inserisci la tua età!!!')
    }
        
});