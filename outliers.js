// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
// The return value should be 1-indexed, not 0-indexed.

// string of numbers - > split (' ') - > even .filter ( !(e%2))
// even array
// odd array
// length < return element

function detectOutlierValue(stringOfNums) {
  let evenArray = stringOfNums.split(' ').filter(e => !(parseInt(e) % 2));
  let oddArray = stringOfNums.split(' ').filter(e => (parseInt(e) % 2));

  return evenArray.length < oddArray.length ? evenArray[0] : oddArray[0];
}


console.log(detectOutlierValue("2 4 7 8 10")); // => 3 - Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("1 10 1 1"));  //=> 2 - Second number is even, while the rest of the numbers are odd