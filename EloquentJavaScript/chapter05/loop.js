const loop = function (value, testFn, updateFn, bodyFn) {
    while (testFn(value)) {
        bodyFn(value);
        value = updateFn(value);
    }
};

const max10 = x => x < 11;
const increment = x => ++x;
const drawAsterisks = x => console.log(`*`.repeat(x));

loop(1, max10, increment, drawAsterisks);
