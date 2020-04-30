// const validPalindrome = s => s.split('').sort().join('').match(/(.)\1*/g).filter(e => e.length % 2).length < 3;

const validPalindrome = s => {

  for (let left = 0, right = s.length - 1; left < s.length / 2; left++, right--) {
    if (s[left] !== s[right]) {
      const l = s.slice(left + 1, right + 1);
      const r = s.slice(left, right);
      return (l === l.split('').reverse().join('')) || (r === r.split('').reverse().join(''));
    }
  }

  return true;

}


console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"));
console.log(validPalindrome('abccba'));
console.log(validPalindrome('abcdcba'));
console.log(validPalindrome('abcddccba'));
console.log(validPalindrome('abcabcdef'));
console.log(validPalindrome("aabdeeNddba aGbddeedbaa")); //false

