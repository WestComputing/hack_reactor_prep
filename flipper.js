// Flip every pair of characters in a string.
// in: string
// out: string
// result =''
// while index+1 < str.len
// iterate through string, 2 chars/time, add flipped chars to result
// if len is odd, add last characters

function flipPairs(input) {
  let output = '';
  let i = 0;

  while (i + 1 < input.length) {
    output += input[i + 1] + input[i];
    i += 2;
  }
  if (input.length % 2) output += input[input.length - 1];
  return output;
}


// too many variables and testing every time for last item is wasteful
function flipPairs(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 2) {
    const char1 = string[i];
    const char2 = string[i + 1];
    result += typeof char2 === "undefined" ? char1 : char2 + char1;
  }
  return result;
}


// slice in-place instead
function flipPairs(string) {
  let result = string.split('')
  result.forEach((e, i, a) => { if (!(i % 2)) a.splice(i, 2, a[i + 1], e) })
  return result.join('')
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output + ' =>', output === "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!");
// --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!