function modulo(num1, num2) {
  if (num1 === 0) return 0
  if (isNaN(num1)) return NaN
  if (isNaN(num2)) return NaN
  let n1 = Math.abs(num1)
  let n2 = Math.abs(num2)
  let remainder = n1 - (Math.floor(n1 / n2) * n2)
  return (num1 < 0) ? -remainder : remainder
}

console.log(modulo(NaN, 10))