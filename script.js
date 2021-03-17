// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
//    Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// creo l'oggetto studente con le proprietà richieste
 // var studente = {
 //   nome: 'Ermenegildo',
 //   cognome: 'Storti',
 //   eta: 18,
 // }
 // // ciclo for in per attraversare tutte le proprietà dell'oggetto studente
 // for( var key in studente){
 //   // stampo le proprietà dell'oggetto
 //   console.log([key] + ': ' + studente[key]);
 // }


// 2. Creare un array di oggetti di studenti.
//    Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// creo un array contenente degli oggetti
var studenti = [

  {
    nome: 'Ermenegildo',
    cognome: 'Storti',
    eta: 18,
  },
  {
    nome: 'Ermanno',
    cognome: 'Lezzi',
    eta: 17,
  },
  {
    nome: 'Adalberto',
    cognome: 'Cavacchione',
    eta: 16,
  },

];
// ciclo l'array di oggetti per stampare le proprietà richieste
for (var i = 0; i < studenti.length; i++){
  console.log(studenti[i].nome + ' ' + studenti[i].cognome);
}


// 3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente
//   inserendo nell’ordine: nome, cognome e età.
