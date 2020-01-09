// Write a function toggleCase which takes in a string and returns a new string where all the lowercase
// letters are changed to uppercase and all the uppercase letters are changed to lowercase.

/* SOLUTION A : 13 lines, 356 characters */
function toggleCase(string) {
  let newString = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= 'a' && string[i] <= 'z') {
      newString += string[i].toUpperCase()
    } else if (string[i] >= 'A' && string[i] <= 'Z') {
      newString += string[i].toLowerCase()
    } else {
      newString += string[i]
    }
  }
  return newString
}

/* SOLUTION B : 9 lines, 269 characters */
// function toggleCase(string) {
//   const isUpperCase = s => s === s.toUpperCase()
//   const toggleChar = c => (isUpperCase(c) ? c.toLowerCase() : c.toUpperCase())

//   let newString = ''
//   for (const char of string) {
//     newString += toggleChar(char)
//   }
//   return newString
// }

/* SOLUTION C : 5 short lines, 141 characters */
// const toggleCase = string =>
//   string
//     .split('')
//     .map(e => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
//     .join('')

/* SOLUTION C++ */
// String.prototype.toggleCase = function() {
//   return this.split('')
//     .map(e => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
//     .join('')
// }

// assertEyeball Tests
console.log(toggleCase('MaRio')) //'mArIO'
console.log(toggleCase('PRP')) //'prp'
console.log(toggleCase('Good news, everyone!')) //'gOOD NEWS, EVERYONE!'

// let str = 'Silly String'
// console.log(str.toggleCase())
