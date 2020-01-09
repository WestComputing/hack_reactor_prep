function prepend(element, list) {
    return {value: element, rest: list};
}

function arrayToList(array) {
    let list = prepend(array.shift(), (array.length) ? array : null);
    while (array.length) {
        list.rest = arrayToList(list.rest);
    }
    return list;
}

function listToArray(list) {
    let array = [];
    while (list !== null && typeof list.rest !== 'undefined') {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function nth(list, number) {
    if (!number) return list.value;
    return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// let testArray = ['A', 'B', 'C'];
// let testList = arrayToList(testArray);
// console.log("testArray ::", testArray);
// TODO: Eliminate the array-killing side-effect
// console.log("testList ::", testList);
// console.log("---");
// console.log("0th ::", nth(testList, 0));
// console.log("1st ::", nth(testList, 1));
// console.log("2nd ::", nth(testList, 2));
// console.log("---");
// console.log("testArray ::", testArray);
// console.log("testList ::", testList);
// console.log("---");
// let testListToArray = listToArray(testList);
// console.log("testListToArray ::", testListToArray);
