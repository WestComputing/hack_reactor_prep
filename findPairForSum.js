function findPairForSum(integers, target) {
    integers = integers.filter(i => (i >= 0 && i <= target));
    let head = 0;
    for (const i of integers.slice(0, -2)) {
        for (const j of integers.slice(++head)) {
            if (i + j === target) return [i, j];
        }
    }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]