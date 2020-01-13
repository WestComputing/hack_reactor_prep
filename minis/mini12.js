// Write a function numToRoman that takes in a number and returns a string of Roman numerals equal in value to the number.

const numToRoman = num => {
  if (num < 1 || num > 3999) return 'NVLLA OR TOO BIGGA'

  const [VALUE, DIGIT] = [0, 1] // Tuple index in table
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
  let result = ''

  do { // findIndex returns the index of the first element that satisfies the provided testing function
    let lookup = TABLE.findIndex(e => num - e[VALUE] >= 0) // finds biggest roman digit that will fit
    result += TABLE[lookup][DIGIT] // concatenate roman digits to result string
    num -= TABLE[lookup][VALUE]    // subtract value of roman digits from num
  } while (num) // while num is non-zero (truthy)
  return result
}

const assertEqual = (act, exp) => `${act} ${act === exp ? `✓ pass` : `FAIL: expected ${exp}`}`
const testNumToRoman = (arg, exp) => console.log(`${arg} => ${assertEqual(numToRoman(arg), exp)}`)
const testNumToRomanData = [
  [2020, 'MMXX'],
  [1999, 'MCMXCIX'],
  [4, 'IV'],
  [33, 'XXXIII'],
  [44, 'XLIV'],
  [3999, 'MMMCMXCIX'],
  [4000, 'NVLLA OR TOO BIGGA']
]
testNumToRomanData.forEach(e => testNumToRoman(e[0], e[1]))
