const coinFlip = () => Math.random() < 0.5 ? 'heads' : 'tails'

const coinFlipArray = (flips) => [...Array(flips)].map(e => (e = coinFlip()))

const areCoinFlipsNear5050 = (a, t = 0.1) => // areCoinFlipsNear5050(array[, tolerance])
  Math.abs(a.length / 2 - a.filter(e => e === 'heads').length) <= a.length / 2 * t


const flips = coinFlipArray(100)

console.log(flips)
console.log(areCoinFlipsNear5050(flips), flips.filter(e => e === 'heads').length)
