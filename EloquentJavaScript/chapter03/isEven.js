function isEven(x) {
    switch (Math.abs(x)) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return isEven(x - 2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false