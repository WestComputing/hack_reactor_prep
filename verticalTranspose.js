
function transposeTwoStrings(inputArray) {

  let longestLength = 0;
  for (let string of inputArray) {
    if (string.length > longestLength) longestLength = string.length;
  }

  const verticalArrays = [];
  for (let string of inputArray) {
    let emptyArray = [...Array(longestLength - string.length)].fill(' ');
    verticalArrays.push(string.split('').concat(emptyArray));
  }

  let result = '';
  for (let c = 0; c < verticalArrays[0].length; c++) {
    for (let a = 0; a < verticalArrays.length; a++) {
      result += verticalArrays[a][c];
      result += a === verticalArrays.length - 1 ? '\n' : ' ';
    }
  }
  return result;
}

console.log(transposeTwoStrings(['Hello', 'World']));
console.log(transposeTwoStrings(['Hi', 'World']));
console.log(transposeTwoStrings(['Hello', 'All']));
console.log(transposeTwoStrings(['God', 'Bless', 'us', 'everyone']));