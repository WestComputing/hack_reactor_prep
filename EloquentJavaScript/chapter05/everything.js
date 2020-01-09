const isEven = x => !isOdd(x);
const isOdd = x => x % 2;

function isEvery(array, condition) {
    return array.every(e => [e].some(condition))
}

function isEveryLoop(array, condition) {
    // Test every element in the array against condition function,
    // return true if every element meets condition
    for (const element of array) {
        if (!condition(element)) return false
    }
    return true
}

function assertEqual(actual, expected, testName = expected.toString()) {
    console.log(actual === expected
        ? `pass`
        : `${testName} FAIL: expected: ${expected}, got ${actual}.`
    )
}

const testSubjectEven = [2, 4, 6, 8];
const testSubjectOdd = [1, 3, 5, 9];
const testSubjectBoth = testSubjectEven.concat(testSubjectOdd);

assertEqual(isEvery(testSubjectEven, isEven), true);
assertEqual(isEvery(testSubjectOdd, isEven), false);
assertEqual(isEvery(testSubjectBoth, isEven), false);

assertEqual(isEveryLoop(testSubjectEven, isEven), true);
assertEqual(isEveryLoop(testSubjectOdd, isEven), false);
assertEqual(isEveryLoop(testSubjectBoth, isEven), false);