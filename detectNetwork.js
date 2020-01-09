"use strict";

const cardData = [{
    network: 'Visa',       // card issuer (network)
    prefixes: ['4'],	   // beginning digits
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

function detectNetwork(cardNumber, cardData) {

    function isPrefix(cardNumber, prefixes) {
        for (const prefix of prefixes) {
            if (cardNumber.toString().startsWith(prefix)) {
                return true;
            }
        }
        return false;
    }

    function isLength(cardNumber, lengths) {
        for (const length of lengths) {
            if (cardNumber.toString().length === length) {
                return true;
            }
        }
        return false;
    }

    for (const card of cardData) {
        if (isPrefix(cardNumber, card.prefixes) && isLength(cardNumber, card.lengths)) {
            return card.network;
        }
    }
}

const network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'

console.log(detectNetwork(4444222244442222, cardData));