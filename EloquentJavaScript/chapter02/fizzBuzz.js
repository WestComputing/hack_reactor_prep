function fizzBuzz(startValue = 1, stopValue = 16) {
    let result = '';
    for (let count = startValue; count < stopValue; count++) {
        let currentLine = count % 3 ? '' : "Fizz";
        currentLine += count % 5 ? '' : "Buzz";
        currentLine += currentLine ? '' : count.toString();
        result += currentLine + '\n';
    }
    return result;
}

console.log(fizzBuzz());