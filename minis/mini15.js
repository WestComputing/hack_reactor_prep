// Write a function catchPhrase which takes a catchy phrase (string) and a function.  
// catchPhrase returns a new spicier function that works just like the input function, 
// but now outputs a cool quip to the console.
// Hint look into the apply function method and the arguments (array-like object) 
// (Don't worry about "this" keyword) use null

function catchPhrase(phrase, func) {
  return function () {
    console.log(phrase)
    return func(...arguments)
  }
}

function add(a, b) {
  return a + b;
}

var spicyAdd = catchPhrase('Bam!', add)
console.log(spicyAdd(2, 3)) //'Bam!' (in console), 5
console.log(spicyAdd(3, 4))


// function catchPhrase(phrase, func) {
//   // input: string, function
//   // output: function identical to old function except it now prints a console string
//   // define a function that prints the input phrase to the console and returns the input function applied to the arguments variable.
//   var outputFunc = function () {
//     console.log(phrase);
//     return func.apply(null, arguments);
//   }
//   return outputFunc;
// };

//input: phrase - string, func - function
//output: spicy func - func

// function catchPhrase(phrase, func) {
//   // console.log(arguments);
//   return function () {
//     // console.log(arguments);
//     // var argArr = Array.prototype.slice.call(arguments);
//     // console.log(...arguments);
//     // console.log(2,3);
//     // console.log(argArr);
//     console.log(phrase);
//     // return func.apply(null, arguments);
//     return func(...arguments);
//     // return func(arguments);
//   }
// }

// function add(a, b) {
//   return a + b;
// }
// add(2, 3);
// var spicyAdd = catchPhrase('Bam!', add);

// console.log(spicyAdd(9, 9));
// console.log(spicyAdd(2, 3));

// function catchPhrase(phrase, func) {
//   return function () {
//     console.log(phrase);
//     return func(...arguments);
//   }
// }