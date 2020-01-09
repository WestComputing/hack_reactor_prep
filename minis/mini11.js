// ROMAN NVMERALS //
//
//  SPQR  // SENATUS POPULUSQUE ROMANUS // SENATE AND PEOPLE OF ROME //
// jSPQhR // JAVASCRIPT AND PEOPLE OF HACK REACTOR //
//
// THE PSEVDOCODE //
//
// MAKE A LOOK-VP TABLE TO CONVERT ROMAN-TO-ARABIC VALVES
// TRAVERSE ROMAN NVMERALS, LEFT-TO-RIGHT
//  IF CVRRENT DIGIT IS LESS THAN ITS FOLLOWING DIGIT, SUBRACT IT FROM ACCVMVLATOR
//  IF CVRRENT DIGIT IS GREATER THAN ITS FOLLOWING DIGIT, ADD IT TO ACCVMVLATOR
//  IF THERE IS NO FOLLOWING DIGIT (CVRRENT DIGIT IS LAST), ADD IT TO ACCVMVLATOR
// RETVRN ACCVMVLATOR
//

////////// VERSION I //////////

function romanToNum(roman) {

  const table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let index // Declared outside of for loop for function scoping
  let result = 0  // Tally of all Roman numerals (accumulator)

  for (index = 0; index < roman.length - 1; index++) { // Walk all but last numeral
    let currentNum = table[roman[index]]  // Lookup Arabic equivalent
    // If NEXT numeral is greater than this one (i.e. "CM"), subtract this number; else, add it
    if (table[roman[index + 1]] > currentNum) result -= currentNum
    else result += currentNum
  }
  // Last numeral will always be added, never subracted; Note: scoping needed here
  return result + table[roman[index]]
}



////////// VERSION II //////////

// const romanToNum = roman => {

//   const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

//   // Loop through all but last element (var for funcion scope)
//   for (var index = result = 0; index < roman.length - 1; index++) {
//     // Lookup Arabic value
//     let currentNumber = table[roman[index]]
//     // If next element is larger than current element, subtract it; if not, add it
//     result += (table[roman[index + 1]] > currentNumber) ? -currentNumber : currentNumber
//   }
//   // Add final element (will always be positive) and return result
//   return result + table[roman[index]] // why var was needed
// }



////////// VERSION III //////////

// const romanToNum = roman => {
//   const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//   let i = r = 0 // index, result
//   for (let e of roman) { // loop through ALL string elements
//     n = table[e] // Arabic number
//     r += table[roman[i + 1]] > n ? -n : n // undefined > n is always false
//     i++ // increment index
//   }
//   return r
// }



////////// VERSION IV //////////

// const romanToNum = roman => {
//   const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//   let i = r = 0
//   for (let e of roman) r += table[roman[i++ + 1]] > (n = table[e]) ? -n : n
//   return r
// }



////////// VERSION V //////////

// const romanToNum = roman => {
//   const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//   return roman.split('').reduce((r, e, i, a) => r += table[a[i + 1]] > table[e] ? -table[e] : table[e], 0)
// }


////////// VERSION I.V (var, no comments, folding table :D ) //////////

// function romanToNum(roman) {
//   const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//   let result = 0

//   for (var index = 0; index < roman.length - 1; index++) {
//     let currentNum = table[roman[index]]
//     if (table[roman[index + 1]] > currentNum) { result -= currentNum }
//     else { result += currentNum }
//   }
//   return result + table[roman[index]]
// }


// TESTS //
const assertEqual = (actual, expected) => `${actual} ${actual === expected ? `pass` : `FAIL: expected ${expected}`}`

console.log(assertEqual(romanToNum('MMXX'), 2020)) // 2020
console.log(assertEqual(romanToNum('MCMXCIX'), 1999)) // 1999
console.log(assertEqual(romanToNum('IV'), 4)) // 4
console.log(assertEqual(romanToNum('XXXIII'), 33)) // 33
console.log() //                                                                                     __
console.log(assertEqual(romanToNum('MMMCMXCIX'), 3999)) // 3999 is the largest possible without bar: IV = 4,000
console.log('(empty):', romanToNum('')) // empty: 0 or NaN
