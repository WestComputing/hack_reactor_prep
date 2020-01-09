// Write a function numToRoman that takes in a number and returns a string of Roman numerals equal in value to the number.

const numToRoman = num => {
  if (num > 3999 || num < 1) return 'NVMBER OUT OF RANGE'

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
  const VALUE = 0 // i.e. 1000
  const DIGIT = 1 // i.e. 'M'
  let result = ''

  do { // findIndex method below returns the index of the first element that satisfies the provided testing function
    let index = TABLE.findIndex(e => num - e[VALUE] >= 0) // finds biggest roman digit that will fit in num
    result += TABLE[index][DIGIT] // concatenate roman digits to result string
    num -= TABLE[index][VALUE]    // subtract value of roman digits from num
  } while (num) // while num is non-zero (truthy)
  return result
}

const assertEqual = (actual, expected) => `${actual} ${actual === expected ? `✓ pass` : `FAIL: expected ${expected}`}`
const testNumToRoman = (arg, exp) => console.log(`${arg} => ${assertEqual(numToRoman(arg), exp)}`)
const testNumToRomanData = [
  [2020, 'MMXX'],
  [1999, 'MCMXCIX'],
  [4, 'IV'],
  [33, 'XXXIII'],
  [44, 'XLIV'],
  [3999, 'MMMCMXCIX'],
  [4000, 'NVMBER OUT OF RANGE']
]
testNumToRomanData.forEach(e => testNumToRoman(e[0], e[1]))
