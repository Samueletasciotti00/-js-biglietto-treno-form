//1) Controllare anni e senioriti
//2) Stampare in console i risultati


// FUNZIONE PER EMISSIONE DATI
document.getElementById('conferma').addEventListener('click',
  function(){

    console.log('click');//Test

    // KM Registrati
    const km = document.getElementById("destination").value;
    console.log(km);

    // Età
    const age = document.querySelector('select#seniority').value;
    console.log(age);


    //Stampaggio nome utente
    document.getElementById('named').innerHTML = document.getElementById('utenteN').value;
    
    //Stampaggio Codice CP
    document.getElementById('code').innerHTML = (Math.random() * 10000).toFixed(0);


    //Stampaggio Carrozza
    document.getElementById('carrozza').innerHTML = (Math.random() * 10).toFixed(0); 

    //Calcolo prezzo in base alla seniority
    if(age != 0){

        //Calcolo del prezzo
        let priceN = km * 0.21;
        console.log(priceN);//Test Calcolo prezzo
        
        if(age === "minorenne"){
            priceN = (priceN * 0.8).toFixed(2);
            console.log(priceN);//Test Minorenne

            //Stampaggio Offerta
            document.getElementById('offer').innerHTML = 'Offerta Junior';

            //Stampaggio Prezzo
            document.getElementById('cost').innerHTML = priceN + '€';
        } else if(age === "senior") {
            priceN = (priceN * 0.6).toFixed(2);
            console.log(priceN)

            //Stampaggio Offerta
            document.getElementById('offer').innerHTML = 'Offerta Senior';

            //Stampaggio Prezzo
            document.getElementById('cost').innerHTML = priceN + '€';
        } else {
            console.log(priceN);

            //Stampaggio Offerta
            document.getElementById('offer').innerHTML = 'Biglietto Semplice';

            //Stampaggio Prezzo
            document.getElementById('cost').innerHTML = priceN + '€';
        }
    } else {
        alert('Inserisci la tua età!!!')
    }
        
});

// FUNZIONE PER ELIMINARE
document.getElementById('annulla').addEventListener('click',
    function(){

        // Nome Utente
        document.getElementById('utenteN').value = '';
        
        // KM Biglietto
        document.getElementById('destination').value = '';

        // Nome Utente
        document.getElementById('named').innerHTML = '';
        
        // OFFERTA
        document.getElementById('offer').innerHTML = '';

        // CARROZZA
        document.getElementById('carrozza').innerHTML = '';
        
        // CODICE CP
        document.getElementById('code').innerHTML = '';

        // COSTO BIGLIETTO
        document.getElementById('cost').innerHTML = '';
        

        // SELEZIONE
        let notSelect = document.getElementById('seniority')

        notSelect.value = 0;
    }
);