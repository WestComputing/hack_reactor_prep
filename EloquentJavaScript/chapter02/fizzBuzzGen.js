function* fizzBuzzGenerator(start = 1, stop = 100, step = 1) {
    for (let count = start; count <= stop; count += step) {
        let currentLine = count % 3 ? '' : "Fizz";
        currentLine += count % 5 ? '' : "Buzz";
        currentLine += currentLine ? '' : count.toString();
        yield currentLine;
    }
}

let fizzBuzzIterable = fizzBuzzGenerator();
for (const fizzBuzz of fizzBuzzIterable) {
    console.log(fizzBuzz);
}
