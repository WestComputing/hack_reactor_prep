function search(array, value) {
  let start = 0
  let end = array.length - 1
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2)
    if (array[mid] === value) return mid
    else if (value < array[mid]) end = mid - 1
    else start = mid + 1
  }
  return null
}

var arr = [1, 3, 16, 22, 31, 33, 34]
var result = search(arr, 31);
console.log(result); //--> 4