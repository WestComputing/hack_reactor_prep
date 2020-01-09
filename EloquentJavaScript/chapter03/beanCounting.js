function countChar(string, char) {
    let charsFound = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) charsFound++;
    }
    return charsFound;
}

function countBs(string) {
    return countChar(string, 'B');
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
console.log(countBs("Bombastic Bees"));
