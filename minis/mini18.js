// Write a function numToRoman that takes in a number and returns a string of Roman numerals equal in value to the number.

const numToRoman = num => {
  if (num > 3999 || num < 1) return ''

  const VALUE = 0 // i.e. 1000
  const DIGIT = 1 // i.e. 'M'
  const TABLE = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],       // PSEVDOCODE:
    [400, 'CD'],      // SEARCH TABLE FOR LARGEST ROMAN DIGIT THAT FITS INTO NUM
    [100, 'C'],       // ADD ROMAN DIGIT(S) TO STRING
    [90, 'XC'],       // SUBTRACT CORRESPONDING VALUE FROM NUM
    [50, 'L'],        // REPEAT UNTIL NUM === 0
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]

  const lookup = TABLE.findIndex(e => num - e[VALUE] >= 0) // find biggest roman digit that will fit in num
  const roman = TABLE[lookup][DIGIT] // put roman digits to result string for recursion
  num -= TABLE[lookup][VALUE] // reduce num by value of roman digit(s)
  return roman + numToRoman(num)
}

const assertEqual = (actual, expected) => `${actual} ${actual === expected ? `✓ pass` : `FAIL: expected ${expected}`}`
const testNumToRoman = ([arg, exp]) => console.log(`${arg} => ${assertEqual(numToRoman(arg), exp)}`)
const testNumToRomanData = [
  [2020, 'MMXX'],
  [1999, 'MCMXCIX'],
  [4, 'IV'],
  [33, 'XXXIII'],
  [44, 'XLIV'],
  [3999, 'MMMCMXCIX'],
  [4000, '']
]
testNumToRomanData.forEach(testNumToRoman)
