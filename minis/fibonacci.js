const fibRec = n => (n < 2) ? n : fibRec(n - 2) + fibRec(n - 1);

const fibLin = n => {
  if (n < 3) return 1;
  let previousFibonacci = 1;
  let currentFibonacci = 1;
  for (let i = 3; i <= n; i++) {
    [currentFibonacci, previousFibonacci] = [previousFibonacci + currentFibonacci, currentFibonacci];
  }
  return currentFibonacci;
}


const nthFibonacci = 42; //42 => 267914296
let used;

console.time('Linear');
console.log(fibRec(nthFibonacci)); // 102334155
used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
console.timeEnd('Linear');

console.time('Recursive');
console.log(fibRec(nthFibonacci)); // 102334155
used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}
console.timeEnd('Recursive');