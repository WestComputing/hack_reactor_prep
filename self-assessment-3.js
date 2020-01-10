var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]

// Ex 1 - return array of names >= 48 in tall
// function tallEnoughToRide(group) {

//   let result = []
//   group.forEach(e => {
//     let height = 0
//     if (e.hasOwnProperty('heightInInches')) height = e.heightInInches
//     if (height >= 48) result.push(e.name)
//   })
//   return result
// }

// after-the-fact
function tallEnoughToRide(group) {
  return group.filter(e => e.heightInInches >= 48).map(e => e.name)
}


console.log(tallEnoughToRide(groupA)) //["Mia", "Kiana", "Alex"];


// Ex 2 - return tallest person
// function tallestPerson(group) {
//   return group.reduce((r, e) => e.heightInInches > r ? e.heightInInches : r, 0)
// }

// after-the-fact
// function tallestPerson(group) {
//   const tallest = group.reduce((r, e) => e.heightInInches > r[1] ? [e.name, e.heightInInches] : r, ['', 0])
//   return tallest[0] + " at " + tallest[1] + " inches"
// }

function tallestPerson(group) {
  const tallest = group.reduce((r, e) => e.heightInInches > r.heightInInches ? e : r)
  return tallest.name + " at " + tallest.heightInInches + " inches"
}

console.log(tallestPerson(groupA)) //"Kiana at 55 inches"


// Ex 3 - Do we have a vegetarian?

var staffA = [
  {
    name: "Lia",
    department: "Human Resources",
    dietaryRestrictions: [],
    mealPreferences: "no preferences"
  },
  {
    name: "Sebastian",
    department: "Engineering",
    dietaryRestrictions: ["dairy free", "gluten free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Ari",
    department: "Executive",
    dietaryRestrictions: ["dairy free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Martha",
    department: "Legal",
    dietaryRestrictions: ["nut allergies"],
    mealPreferences: "non-vegetarian"
  }
];

function orderAVegetarianDish(staff) {
  return staff.some(e => e.mealPreferences === "vegetarian")
}

console.log(orderAVegetarianDish(staffA)) //true



// Ex 4 - string with the number of items you bought, and the total amount you spent.
// walk array, check price vs. rem balance, if can afford, buy, then next until money === 0

var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];

function shoppingSummary(list) {
  let bal = 100
  let items = 0
  list.forEach(e => {
    if (bal >= e.price) {
      bal -= e.price
      items++
    }
  })
  return `I got ${items} items at ${(Math.round((100 - bal) * 100) / 100)}`
}

console.log(shoppingSummary(shoppingList)) //"I got 3 items at $99.73"

// Ex 5 - eturns a new array without the most expensive thing
// reduce to find most expensive then filter < than that value

function removeMostExpensive(listIn) {
  let list = listIn.slice()
  let highestPrice = list.reduce((r, e) => e.price > r ? e.price : r, 0)
  let highestIndex = list.findIndex(e => e.price === highestPrice)
  list.splice(highestIndex, 1)
  return list
}

console.log(removeMostExpensive(shoppingList))

// Easy ones
// Ex 1
function identity(input) {
  return input
}

console.log(identity("hello world")); //"hello world"
console.log(identity(500)); //500

// Ex 2
function coffeeLover(isNormal) {
  return isNormal ? "Enjoy a cup for free!" : "Take a look at our other drinks!"
}

console.log(coffeeLover(true)); //"Enjoy a cup for free!"
console.log(coffeeLover(false)); //"Take a look at our other drinks!"

// Ex 3

var customer001 = {
  name: "John Riley",
  ticketNumber: "A01",
  enjoysCoffee: true
};

//likewise..

var customer002 = {
  name: "Harold Crane",
  ticketNumber: "A02",
  enjoysCoffee: false
};

function coffeeLoverExtended(customer) {
  return coffeeLover(customer.enjoysCoffee)
}

console.log(coffeeLoverExtended(customer001)); //"Enjoy a cup for free!"
console.log(coffeeLoverExtended(customer002)); //"Take a look at our other drinks!"

// Ex 4

function convertToKilometers(miles) {
  //you do not have to worry about rounding to any number of decimal places. Our tests will do that for you.
  return 1.60934 * miles
}


console.log(convertToKilometers(50)); //80.467
console.log(convertToKilometers(361)); //580.973


// Ex 5

function isGoodFreethrowShooter(number) {
  if (number < 0.65) return "Horrible freethrow shooter"
  if (number < 0.80) return "Decent freethrow shooter"
  return "Great freethrow shooter"

}
console.log(isGoodFreethrowShooter(0.90)); //"Great freethrow shooter"
console.log(isGoodFreethrowShooter(0.09)); //"Horrible freethrow shooter"
console.log(isGoodFreethrowShooter(0.75)); //"Decent freethrow shooter"

// Ex 6
function dogsIWouldPet(dog) {
  return `I would pet dogs no bigger than an ${dog}`
}

console.log(dogsIWouldPet("ottoman")) //"I would pet dogs no bigger than an ottoman"
console.log(dogsIWouldPet("small horse")) //"I would pet dogs no bigger than an small horse"
console.log(dogsIWouldPet("Terrier")) //"I would pet dogs no bigger than an Terrier"

// Ex 7

function isTallEnough(height) {
  return height >= 48
}

console.log(isTallEnough(72)); //true
console.log(isTallEnough(28)); //false

// Ex 8
function favoriteDessert() {
  return { name: "Flan", ovenTemp: 350, prepTime: "25 minutes + 50 minutes chilling" }
}
console.log(favoriteDessert())

// Ex 9
function countNumOfStrings(array) {
  return array.reduce((r, e) => typeof e === 'string' ? r + 1 : r, 0)
}


console.log(countNumOfStrings(["hello", "world", 5, true, {}])); //2
console.log(countNumOfStrings(["foo", 2, 10, "bar", 5, false, {}, "baz"])); //3
console.log(countNumOfStrings(["There is only one string in this example"])); //1


// Ex 10
function listLengthOfAllWords(words) {
  return words.map(e => e.length)
}

console.log(listLengthOfAllWords(['hello', 'world', 'I', 'can', 'code'])); //[5, 5, 1, 3, 4];