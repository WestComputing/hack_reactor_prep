// Flip every chunk of n characters in a string, where n > 1.
// Note that this is intentionally very similar to the previous problem.
// Please focus on getting a working solution with the tools you know well.
// Practice the interactive/collaborative interview style that's described in the documentation.

// split into array
// shift 5 elements into chunk
// reverse the chunk
// push chunk to result

// counter every +=5
// .splice(counter, 5, reversed splice)

function flipEveryNChars(string, chunkSize) {
  let inputArray = string.split('');
  let counter = 0;
  let result = '';
  let slicedArray;

  while (counter < inputArray.length) {
    slicedArray = inputArray.slice(counter, counter + chunkSize);
    result += slicedArray.reverse().join('');
    counter += chunkSize;
  }
  return result;
}

// smaller
function flipEveryNChars(input, n) {
  const inputArray = input.split('')
  for (let i = 0; i < inputArray.length; i += n)
    inputArray.splice(i, n, ...inputArray.slice(i, i + n).reverse())
  return inputArray.join('')
}

// smallest/clearest
function flipEveryNChars(input, number) {
  let result = ''
  for (let i = 0; i < input.length; i += number)
    result += input.substring(i, i + number).split('').reverse().join('')
  return result
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

input = 'a long example';
output = flipEveryNChars(input, 5);
console.log(output); // --> nol aaxe gelpm