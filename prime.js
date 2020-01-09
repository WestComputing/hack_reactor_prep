const array = [1, 2, 3, 9, 8, 7, 4, 5, 6, 0, 13, 15, 19, 21]
const object = { one: 1, two: 2, three: 3 }
const words = ['alpha', 'beta', 'gamma', 'duplicate', 'duplicate']

// function logObj(obj, fn) {
//   return Array.isArray(obj) ? array.forEach(e => { console.log(e); fn(e) }) :
//     Object.entries(obj).forEach(([k, v]) => { console.log(k, v); fn([k, v]) })
// }
// const lg = (...x) => console.log('lg', ...x)
// logObj(array, lg)
// logObj(object, lg)

// function removeDuplicates(words) {
//   const result = []
//   new Set(words).forEach(e => result.push(e))
//   return result
// }
// console.log(removeDuplicates(words))

function isPrime(n) {
  if (n < 2 || ((n > 7) && !(n % 2 || n % 3 || n % 5))) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}

const countPrimes = function (n) {
  let count = 0
  for (let i = n - 1; i > 1; i--) if (isPrime(i)) count++
  return count
}

array.sort((a, b) => a > b ? 1 : a < b ? -1 : 0).forEach(e => console.log(e, isPrime(e)))
console.time('Timer')
console.log('Pass:', countPrimes(499979) === 41537)
console.timeEnd('Timer')