function deepEqual(a, b) {
    if (a === b) return true;

    let typeA = typeof a;
    let typeB = typeof b;
    if (typeA == null || typeA !== 'object' ||
        typeB == null || typeB !== 'object') return false;

    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    for (const key of keys) {
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj), "→ true?");
console.log(deepEqual(obj, {here: 1, object: 2}), "→ false?");
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}), "→ true?");
console.log(deepEqual(null, null), "→ true?");

let objectA = 1;
let objectB = "one";
console.log(deepEqual(objectA, objectB), "→ false?");

objectA = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
objectB = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
            extra: 1
        }
    }
};
console.log(deepEqual(objectA, objectB), "→ false?");