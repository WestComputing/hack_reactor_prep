function quadruples2(givenArray, evenOrOdd) {
    const eo = evenOrOdd[0].toLowerCase();
    const regex = new RegExp(`(?<=${eo}{3})${eo}`, 'g');
    return [...givenArray.map(n => n % 2 ? 'o' : 'e').join('').matchAll(regex)].length;
}

function quadruples(givenArray, evenOrOdd) {
    let result = 0;
    let consecutive = 0;
    const isTarget = x => evenOrOdd === "odd" ? x % 2 : !(x % 2);
    for (num of givenArray) {
        if (isTarget(num)) {
            consecutive++;
            if (consecutive > 3) {
                result++;
            }
        } else {
            consecutive = 0;
        }
    }
    return result;
}


console.log(quadruples2([3, 2, 2, 4, 8, 5], 'even'));  // 1
console.log(quadruples2([2, 4, 6, 8, 10, 5], 'even'));  // 2
console.log(quadruples2([2, 4, 6, 8, 10, 5], 'odd'));  // 0
console.log();
console.log(quadruples([3, 2, 2, 4, 8, 5], 'even'));  // 1
console.log(quadruples([2, 4, 6, 8, 10, 5], 'even'));  // 2
console.log(quadruples([2, 4, 6, 8, 10, 5], 'odd'));  // 0

