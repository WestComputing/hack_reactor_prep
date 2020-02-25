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
for (i of Array(15)) console.log(fizzBuzz());
console.log('\nFizzBuzz100:');
for (i of Array(15)) console.log(fizzBuzz100());
console.log('\nBack to FizzBuzz:');
for (i of Array(15)) console.log(fizzBuzz());
