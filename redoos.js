Array.prototype.redoos = function (callbackFunction, initialValue) {

  let accumulator;
  let currentValue;
  let index = 0;
  let array = this;

  // Set accumulator to first element if initialValue not specified
  if (typeof initialValue === "undefined") {
    accumulator = array[index];
    index++;
  } else {
    accumulator = initialValue;
  }

  while (index < array.length) {
    currentValue = array[index];
    accumulator = callbackFunction(accumulator, currentValue, index, array);
    index++;
  }
  return accumulator;
}

// Add currentValue to accumulator and return it; print all arguments
function callback(accumulator, currentValue, index, array) {
  accumulator += currentValue;
  console.log(` Array: ${array} Index: ${index} Current Value: ${currentValue} Accumulator: ${accumulator}`);
  return accumulator;
}

const array = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

// Callback function, no initialValue
console.log("Built-in");
const reduce = array.reduce(callback);

console.log("\nRedoos");
const redoos = array.redoos(callback);

// Anonymous function is identical to function callback above, initialValue set to 100
console.log("\nReduce 100");
const reduce100 = array.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  console.log(` Array: ${array} Index: ${index} Current Value: ${currentValue} Accumulator: ${accumulator}`);
  return accumulator;
}, 100);

console.log("\nRedoos 100");
const redoos100 = array.redoos((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  console.log(` Array: ${array} Index: ${index} Current Value: ${currentValue} Accumulator: ${accumulator}`);
  return accumulator;
}, 100);

// The purpose of reduce is to reduce an array to one value
console.log("\nBuilt-in result is", reduce);
console.log("Redoos result is", redoos);
console.log("Built-in 100 result is", reduce100);
console.log("Redoos 100 result is", redoos100);
