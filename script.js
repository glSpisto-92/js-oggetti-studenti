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

// 3. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere
 // un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo un oggetto vuoto dove inserirò i dati del nuovo studente
 var nuovoStudente = {};

 // 3 prompt per inserire i nuovi dati tramite l'utente
 var inputNome = prompt('Inserisci un nuovo studente : nome');
 var inputCognome = prompt('Inserisci un nuovo studente : cognome');
 var inputEta = parseInt(prompt('Inserisci l\'età'));

 // inserisco i nuovi dati nell'oggetto
 nuovoStudente.nome = inputNome;
 nuovoStudente.cognome = inputCognome;
 nuovoStudente.eta = inputEta;

 // pusho i nuovi dati studente nell'array di studenti
 studenti.push(nuovoStudente);

 console.log(studenti);
