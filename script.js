// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//    Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// creo l'oggetto studente con le proprietà richieste
 var studente = {
   nome: 'Ermenegildo',
   cognome: 'Storti',
   eta: 18,
 }
 // ciclo for in per attraversare tutte le proprietà dell'oggetto studente
 for( var key in studente){
   // stampo le proprietà dell'oggetto
   console.log([key] + ': ' + studente[key]);
 }


// 2. Creare un array di oggetti di studenti.
//    Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// 3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente
//   inserendo nell’ordine: nome, cognome e età.
