function FizzBuzz(startValue = 1) {
  let count = startValue;
  let result;

  return function () {
    result = count % 3 ? '' : "Fizz";
    result += count % 5 ? '' : "Buzz";
    result += result ? '' : count.toString();
    count++;
    return result;
  }
}

let fizzBuzz = FizzBuzz();
let fizzBuzz100 = FizzBuzz(100);

console.log('FizzBuzz:');
Array(15).fill(0).forEach(() => console.log(fizzBuzz()));
console.log('\nFizzBuzz100:');
Array(15).fill(0).forEach(() => console.log(fizzBuzz100()));
console.log('\nBack to FizzBuzz:');
Array(15).fill(0).forEach(() => console.log(fizzBuzz()));
