const alphabeticShift = s => s.split('').map(e => String.fromCharCode((c = e.charCodeAt(0) + 1) > 90 && c < 97 ? 65 : c > 122 ? 97 : c)).join('');

// More readable, same thing:

// function alphabeticShift(inputString) {

//   const alphaCode = e => {
//     code = e.charCodeAt(0) + 1;
//     return String.fromCharCode(
//       code > 90 && code < 97 ? 65 :
//         code > 122 ? 97 : code
//     );
//   }

//   return inputString.split('').map(e => alphaCode(e)).join('');
// }

console.log(alphabeticShift('crazy'));
