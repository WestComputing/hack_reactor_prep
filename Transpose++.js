// determine longest string
// convert to array
// walk larger string, map to str0 _ str1 \n
// join

// Bad example from gLearn:
// function transposeTwoStrings(str1, str2) {
//   return zipArrays(str1.split(''), str2.split(''));
// }
// const zipArrays = (...arrs) =>
//   arrs.reduce((a, b) => a.length > b.length ? a : b)
//     .map((_, idx) => arrs.map(arr => arr[idx] || ' '))
//     .map((pair) => pair.join(' ')).join('\n')



const transposeTwoStrings = inputStrings =>
  [...Array(inputStrings[0].length > inputStrings[1].length ? inputStrings[0].length : inputStrings[1].length)]
    .map((e, i) => (inputStrings[0][i] || ' ') + ' ' + (inputStrings[1][i] || ' ')).join('\n')

console.log(transposeTwoStrings(['Hello', 'World']));
console.log(transposeTwoStrings(['Hi', 'World']));
console.log(transposeTwoStrings(['Hello', 'All']));