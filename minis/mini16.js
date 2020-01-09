function callometer(func) {
  let count = 0;
  console.log("let count:", count)

  return function () {
    console.log(`Callometer: ${++count}`)
    return func(...arguments)
  }
}

const add = (a, b) => a + b
const subtract = (a, b) => a - b

const addCount = callometer(add)
const subtractCount = callometer(subtract)
const anotherAddCount = callometer(add)

console.log('-------------')
console.log(addCount(2, 3))  //5 console - Callometer:  1
console.log(addCount(2, 4))  //6 console - Callometer:  2
console.log(addCount(8, 3))  //11 console - Callometer:  3
console.log('-------------')
console.log(subtractCount(2, 3))  //-1 console - Callometer:  1
console.log(subtractCount(2, 4))  //-2 console - Callometer:  2
console.log(subtractCount(8, 3))  //5 console - Callometer:  3
console.log('-------------')
console.log(anotherAddCount(2, 3))  //5 console - Callometer:  1
console.log(anotherAddCount(2, 4))  //6 console - Callometer:  2
console.log(anotherAddCount(8, 3))  //11 console - Callometer:  3
