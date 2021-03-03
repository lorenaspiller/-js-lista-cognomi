/*
CONSEGNA
Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
*/


/*
Prima versione con .toUpperCase() applicato al prompt del cognome inserito dall'utente, anche se il metodo uppercase trasforma tutte le lettere della parola in maiuscole... però funziona bene! Perchè se inserisco il cognome con o senza la prima lettera maiuscola viene inserito in ordine alfabetico nell'array.
*/

// 1. Chiedo all’utente il cognome
var cognome = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 2. Controllo del prompt inserito che sia in lettere
do {
  var cognomeUtente = prompt("inserisci il cognome").toUpperCase();
} while (!(isNaN(cognomeUtente)));

// 3. Inserisco cognome dell'utente nell'array
cognome.push(cognomeUtente);

// 4. Metto l'array in ordine alfabetico
cognome.sort();

// 5. Scrivo la posizione "umana" in cui il nuovo utente si trova
for (var i = 0; i < cognome.length; i++) {

  if (cognomeUtente == cognome[i]) {
    var posizione = i + 1;
    console.log(cognome);
    console.log("la posizione di " + cognomeUtente + " è "  + posizione);
  }
}



/*
Seconda versione con il metodo .ArrayMap() applicato all'array. In questo caso il cognome scritto nel prompt dall'utente viene inserito correttamente solo se l'utente lo digita tutto minuscolo.
*/

// // 1. Chiedo all’utente il cognome
// var cognome = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
//
// // 2. Rendo gli elementi dell'array minuscoli
// var cognomeMinuscolo = cognome.map(name => name.toLowerCase());
//
// // 3. Controllo del prompt inserito che sia in lettere
// do {
//   var cognomeUtente = prompt("inserisci il cognome");
// } while (!(isNaN(cognomeUtente)));
//
// // 4. Inserisco cognome dell'utente nell'array
// cognomeMinuscolo.push(cognomeUtente);
//
// // 5. Metto l'array in ordine alfabetico
// cognomeMinuscolo.sort();
//
// // 6. Scrivo la posizione "umana" in cui il nuovo utente si trova
// for (var i = 0; i < cognomeMinuscolo.length; i++) {
//
//   if (cognomeUtente == cognomeMinuscolo[i]) {
//     var posizione = i + 1;
//     console.log(cognomeMinuscolo);
//     console.log("la posizione di " + cognomeUtente + " è "  + posizione);
//   }
// }
