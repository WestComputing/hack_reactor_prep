// Array.prototype.flat() isn't implemented in node 10
// e.g. console.log([1,2,[3,4,[5,6]]].flat(Infinity))

const flattenArray = (array, depth = Infinity) =>
    // Iterate array; if element is an array and within depth...
    array.reduce((a, e) => Array.isArray(e) && depth > 1
        // ...add the flattened array
        ? a.concat(flattenArray(e, depth - 1))
        // ... otherwise, just add the element as is
        : a.concat(e)
        // Start accumulator with an empty array
        , []);


let testSubject = [1, 2, [3, 4, [5, 6]], [7, 8]];
console.log(testSubject.flat(Infinity));
console.log(flattenArray(testSubject));

const flattenArrayOnce = array => flattenArray(array, 1);
console.log(flattenArrayOnce(testSubject));
