// Palidroma
// Chiedere all’utente di inserire una parola
// let answer
// answer = 'yes, is palindrom'
// Creare una funzione per capire se la parola inserita è palindroma


let text = prompt('Scrivi una parola');
function controllapalindromo(text) {
    let word_reverse = text.split('').reverse().join('');
    if (text===word_reverse) {
    console.log('si è palindromo');     
    }else{
        console.log('non è palindromo');  
    }
}
controllapalindromo(text);


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


let userEvenOdd = prompt('pari o dispari?');
let userNumber = Number(prompt('Inserisci un numero da 1 a 5'));
console.log(userEvenOdd,userNumber);

function RandomNumber(userNumber, evenorodd) {
  let x = Math.floor((Math.random() * 5) + 1);
  let somma = userNumber + x 
  console.log(somma);
  if (somma % 2 === 0 && evenorodd === 'pari') {
    console.log('You are the winner!');    
  }else if (somma % 2 === 1 && evenorodd === 'dispari'){
    console.log('You are the winner!!');
  } else{
    console.log('the pc win');
    
  }
}
RandomNumber(userNumber, userEvenOdd) 
 