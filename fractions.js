// Shows base2 vs base10 irrational numbers by adding 1/n n times 100 times: (1/n) + (1/n) +...+ (1/n)
// Fills an array of 100n elements with 1/n, then sums all elements where n = 2..32

const addToOneHundred = denomninator => console.log(
  `1/${denomninator} = ${(1 / denomninator).toFixed(8)} =>`,
  [...Array(denomninator * 100)].fill(1 / denomninator).reduce((sum, fraction) => sum += fraction)
)

const denominators = [...Array(31)].map((_, i) => i + 2)
denominators.forEach(addToOneHundred)