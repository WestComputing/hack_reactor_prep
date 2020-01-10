// Write a function findMiddleChar that takes a string and returns the string char that is at the 
// midway point of the string.  If the string has no character at the midway point, return ""

// If the length of the string (s) is odd (length / 2 has a remainder, truthy),
//   then return the character at length / 2 (the decimal gets truncated)
//   otherwise, return an empty string

const findMiddleChar = s => s.length % 2 ? s.charAt(s.length / 2) : ''


const testFindMiddleChar = s => console.log(`'${findMiddleChar(s)}' <=> "${s}" (${s.length})`)
const testData = [
  'Mario',
  'Mario!',
  'What character is in the middle of this string?',
  'Why does Mario like Himalayan rice so much?'
]
testData.forEach(testFindMiddleChar)
