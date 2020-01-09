// Useful for false-condition || short-circuit:
//
//   true && false - no short-circuit, both operands are evaluated
//  false && true  - short-circuit, only first operand is evaluated
// !false && !true - no short-circuit with false first operand
//   true || false - short-circuit
//  false || true  - no short-circuit with false first operand
// !false || !true - short-circuit with false first operand

// For the poindexter eggheads:

const and = (p, q) => !(!p || !q)


// For the 1337h@x0rz:

// const and = (p, q) => p ? q ? true : false : false

// For the lacternary intolerant:

// const and = (p, q) => { if (p) if (q) return true; else return false; else return false }




// function and(p, q) {
//   if (p) if (q) return true
//   else return false
//   else return false
// }


const testAnd = (p, q, pq) => {
  const result = and(p, q)
  const testResult = result === pq ? `✓ pass` : `FAIL: expected ${pq}`
  console.log(`${p}\t and\t${q}\t is\t${result}\t${testResult}`)
}
const testAndData = [
  [true, true, true],
  [true, false, false],
  [false, true, false],
  [false, false, false]
]
testAndData.forEach(e => testAnd(...e))  // ...e equivalent to e[0], e[1] ..., e[n]
