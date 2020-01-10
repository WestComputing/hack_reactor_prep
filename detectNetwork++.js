"use strict";

const cardData = [{
  network: 'Visa',       // card issuer (network)
  prefixes: ['4'],	     // beginning digits
  lengths: [13, 16, 19]  // length(s) of card numbers
}, {
  network: 'Mastercard',
  prefixes: ['51', '52', '53', '54', '55'],
  lengths: [16]
}, {
  network: 'American Express',
  prefixes: ['34', '37'],
  lengths: [15]
}, {
  network: 'Diner\'s Club',
  prefixes: ['38', '39'],
  lengths: [14]
}];

// one-liner but crashes with invalid data
// function detectNetwork(cardNumber, cardData) {

//   return cardData
//     .filter(e => e.lengths.some(l => l === cardNumber.length))
//     .filter(e => e.prefixes.some(p => cardNumber.startsWith(p)))
//   [0].network

// }


function detectNetwork(cardNumber, cardData) {

  const card = cardData
    .filter(e => e.lengths.some(l => l === cardNumber.length))
    .filter(e => e.prefixes.some(p => cardNumber.startsWith(p)))

  return card.length ? card[0].network : 'Invalid Number'
}


const network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'

console.log(detectNetwork('4444222244442222', cardData)); // Visa
console.log(detectNetwork('39', cardData)); // Invalid