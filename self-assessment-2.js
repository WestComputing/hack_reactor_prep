const countInstancesOf = (letter, sentence) => sentence.split('').reduce((r, e) => e === letter ? ++r : r, 0)

console.log(countInstancesOf("a", "mississippi is the best river ever")); //0
console.log(countInstancesOf("i", "mississippi is the best river ever")); //6
console.log(countInstancesOf("b", "mississippi is the best river ever")); //1

function titleCase(str) {
  let words = str.toLowerCase().split(' ')
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split('')
    word[0] = word[0].toUpperCase()
    words[i] = word.join('')
  }
  return words.join(' ')
}

console.log(titleCase('peter piper')); //"Peter Piper"
console.log(titleCase('teXt mEssAge')); //"Text Message"
console.log(titleCase('more to me than meets the eye')); //"More To Me Than Meets The Eye"


var anotherPerson = {
  name: {
    first: "kylA",
    last: "liVingSton"
  },
  birthDay: {
    month: "octobeR",
    day: 20,
    year: 1961
  }
}

function renderInfoNeatly(obj) {

  obj.name.first = titleCase(obj.name.first)
  obj.name.last = titleCase(obj.name.last)
  obj.birthDay.month = titleCase(obj.birthDay.month)
  return `${obj.name.first} ${obj.name.last}: ${obj.birthDay.month} ${obj.birthDay.day}, ${obj.birthDay.year}`
}

console.log(renderInfoNeatly(anotherPerson)); //"Kyla Livingston: October 20, 1961"


var staff = [
  { name: { first: "Alyssa", last: "Hacker" }, birthDay: { month: "June", day: 5, year: 1987 } },
  { name: { first: "Ben", last: "Bitdiddle" }, birthDay: { month: "August", day: 19, year: 1984 } },
  { name: { first: "Eva", last: "Ator" }, birthDay: { month: "March", day: 29, year: 1980 } },
  { name: { first: "Lem", last: "Tweakit" }, birthDay: { month: "August", day: 11, year: 1989 } },
  { name: { first: "Louis", last: "Reasoner" }, birthDay: { month: "November", day: 17, year: 1992 } }
];

const getPeopleBornIn = (people, month) => people.filter(e => e.birthDay.month === month).map(e => renderInfoNeatly(e))

console.log(getPeopleBornIn(staff, 'August'));
// ["Ben Bitdiddle: August 19, 1984", "Lem Tweakit: August 11, 1989"]


// other part:

const lesserNum = (num1, num2) => num1 < num2 ? num1 : num2
console.log(lesserNum(0, 42))

const isHotdogASandwich = input => input === undefined ? true : "Alright, MAYBE. Who's to say?"
console.log(isHotdogASandwich()); //true
console.log(isHotdogASandwich("Well, if you consider these arguments..")); //"Alright, MAYBE. Who's to say?"
console.log(isHotdogASandwich(42)); //"Alright, MAYBE. Who's to say?"

function billTotal(subTotal) {
  return subTotal + (subTotal * 0.2) + (subTotal * 0.09875)
}
console.log(billTotal(120)); //155.85
console.log(billTotal(200)); //259.75

function secondsConverter(seconds) {
  return `${Math.floor(seconds / 60)} minutes and ${seconds % 60} seconds`
}

console.log(secondsConverter(300)); //"5 minutes and 0 seconds"
console.log(secondsConverter(5225)); //"87 minutes and 5 seconds"
console.log(secondsConverter(18)); //"0 minutes and 18 seconds"