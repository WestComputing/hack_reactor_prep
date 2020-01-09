const coinFlip = (skew = 0) => (Math.random() < 0.5 + skew ? 'heads' : 'tails')

const coinFlipArray = (flips, skew = 0) => [...Array(flips)].map(e => (e = coinFlip(skew)))

const coinFlipNormalize = (skew = 0) =>
  [...Array(1000)]
    .map(e => Math.random())
    .reduce((r, e) => (r += e)) / 1000 <= 0.5 + skew ? 'heads' : 'tails'

const coinFlipArrayNormalize = (flips, skew = 0) =>
  [...Array(flips)]
    .map(e => (e = coinFlipNormalize(skew)))

const isCoinFlipEven = (a, t = 0.1) => // isCoinFlipEven(array[, tolerance])
  Math.abs(a.length / 2 - a.filter(e => e === 'heads').length) <= a.length * (t / 2)


let flips = coinFlipArray(100)
console.log(isCoinFlipEven(flips), flips.filter(e => e === 'heads').length)

// let normalFlips = coinFlipArrayNormalize(100, 0.25)
// console.log(normalFlips, isCoinFlipEven(normalFlips, 0.1))
