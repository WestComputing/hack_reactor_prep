function reverseArrayInPlace(array) {
    let arrayLength = array.length - 1;
    for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
        let j = arrayLength - i;
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function reverseArray(array) {
    let copy = array.slice();
    let result = [];
    while (copy.length) {
        result.unshift(copy.shift());
    }
    return result;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

let arrays = [
    ['a', 'b', 'c', 'd', 'e'],
    [1, 2, 3, 4, 5, 6]
];
for (let array of arrays) {
    console.log(array, reverseArray(array));
    reverseArrayInPlace(array);
    console.log(array);
}
