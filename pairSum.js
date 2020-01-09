// Given a list of non-negative integers and a target sum, 
// find a pair of numbers that sums to the target sum.


// iterate through  array, 0 - len - 1
// . iterate through  array, outer+1 - len
//    if sum === target return these 2 numbers
// return []

function findPairForSum(array, value) {
  const arrayCopy = array.filter(e => e <= value && e >= 0);
  const len = arrayCopy.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arrayCopy[i] + arrayCopy[j] === value) return [arrayCopy[i], arrayCopy[j]];
    }
  }
  return [];
}





// // in: list of numbers
// // out: pair of numbers = target OR []
// // outer loop: 1-last-1
// //   inner loop: outer+1 - last

function findPairForSum(numberList, target) {
  let result = [];
  numberList = numberList.filter(e => e <= target && e >= 0);

  for (let outer = 0; outer < numberList.length - 1; outer++) {
    for (let inner = outer + 1; inner < numberList.length; inner++) {
      if (numberList[outer] + numberList[inner] === target) return [numberList[outer], numberList[inner]];
    }
  }
  return result;
}


var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

pair = findPairForSum([3, 34, 4, 12, 5, 2, -1], 999);
console.log(pair); // --> []