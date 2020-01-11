const fibonacci = n => (n === 0 || n === 1) ? n : fibonacci(n - 2) + fibonacci(n - 1)

console.time('fibonacci')
console.log(fibonacci(60))
console.timeEnd('fibonacci')
