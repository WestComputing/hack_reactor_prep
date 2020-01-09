// You will be given an array that contains two strings. 
// Your job is to create a function that will take those two strings and transpose them,
// so that the strings go from top to bottom instead of left to right.

// should return:
// H W  
// e o  
// l r  
// l l  
// o d

// in: 2 strings
// out: 1 string, 1 char from each in + \n
// fill in when one string is shorter
//
// 2 empty arrays filled w/ spaces
// populate arrays from strings
// loop through arrays building result string with _ \n

function transposeTwoStrings(inputStrings) {
  const longestLength = inputStrings[0].length > inputStrings[1].length ? inputStrings[0].length : inputStrings[1].length;
  const leftArray = Array(longestLength).fill(' ');
  const rightArray = Array(longestLength).fill(' ');

  for (let i = 0; i < inputStrings[0].length; i++) {
    leftArray[i] = inputStrings[0][i];
  }

  for (let i = 0; i < inputStrings[1].length; i++) {
    rightArray[i] = inputStrings[1][i];
  }

  let result = '';
  for (let i = 0; i < longestLength; i++) {
    result += leftArray[i] + ' ' + rightArray[i] + '\n';
  }

  return result;
}

console.log(transposeTwoStrings(['Hi', 'World']));