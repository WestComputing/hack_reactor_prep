function convertTo(units, num) {
  if (units === 'cm') return 2.54 * num
  return num / 2.54
}

console.log(convertTo('cm', 100)) //254
console.log(convertTo('in', 50.8)) //20

var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
}

function displayBusTimes(schedules, line) {
  console.log(
    `The bus will arrive in the next ${cityZBusSchedules[line]} minutes.`
  )
}

displayBusTimes(cityZBusSchedules, 'bus15Schedule') //"The bus will arrive in the next [11,22,33,44] minutes."
displayBusTimes(cityZBusSchedules, 'bus22Schedule') //"The bus will arrive in the next [15,30,45] minutes."

function addGenre(song, genre) {
  song.genre = genre
}

var favoriteSong = {
  title: 'Countdown',
  artist: 'Beyonce',
  durationInSeconds: 212
}

addGenre(favoriteSong, 'Contemporary R&B')
console.log(favoriteSong)
//{title: "Countdown", artist: "Beyonce", durationInSeconds: 212, genre: "Contemporary R&B"};
function executiveSummary(email) {
  return email.substring(0, 15)
}

console.log(
  executiveSummary(
    'URGENT: the lobby is rapidly filling up with popcorn. We cannot locate where the popcorn is coming from. Send help.'
  )
)
console.log(executiveSummary('URGreat!!!'))
// Now this is funny!

var awesomePlaylist = [
  {
    title: 'Hay Day',
    artist: 'Robo-Crop',
    durationInSeconds: 378
  },
  {
    title: '10,000 Pounds',
    artist: 'L-Ton Jonn',
    durationInSeconds: 498
  },
  {
    title: "Caesar's Salad",
    artist: 'DJ Dinner Julius',
    durationInSeconds: 600
  },
  {
    title: 'The British Are On Their Way',
    artist: 'Raul Pevere',
    durationInSeconds: 1095
  },
  {
    title: '13th',
    artist: 'The Doctors',
    durationInSeconds: 185
  }
]

function removePartyKillers(playlist) {
  return playlist.filter(e => e.durationInSeconds <= 480)
}

console.log(removePartyKillers(awesomePlaylist))

var myCart = [
  {
    name: 'chips',
    nutritionalValue: { lowSugar: true, lowSodium: false },
    price: 0.75
  },
  {
    name: 'carrots',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 1.5
  },
  {
    name: 'cookies',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 2.5
  },
  {
    name: 'apples',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 0.6
  },
  {
    name: 'soda',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 1.1
  },
  {
    name: 'avocados',
    nutritionalValue: { lowSugar: true, lowSodium: true },
    price: 0.75
  }
]

function onlyPayForHealthyThings(foodList) {
  return foodList
    .filter(e => e.nutritionalValue.lowSugar && e.nutritionalValue.lowSodium)
    .reduce((r, e) => (r += e.price), 0) // !?%^& I knew I should have had that! heh
}

console.log(onlyPayForHealthyThings(myCart))

function wasItFunny(response) {
  return response ? 'HAHAHA' : 'meh'
}

console.log(wasItFunny(true)) //"HAHAHA"
console.log(wasItFunny(false)) //"meh"

function isWordLong(word) {
  return word.length > 15
}

console.log(isWordLong('absentmindedness')) //true
console.log(isWordLong('aerodynamics')) //false

function addFourNums(numA, numB, numC, numD) {
  return [...arguments].reduce((sum, e) => (sum += e))
}
console.log(addFourNums(10, 20, 30, 40)) //100

function addOnlyFirstFourNums(numbers) {
  return numbers.slice(0, 4).reduce((sum, e) => (sum += e))
}

console.log(addOnlyFirstFourNums([40, 600, 8000, 2, 19, 25, 60, 90])) //8642

// I only read the first 15 characters of the instructions :)

function convertInchesToCentimeters(inches) {
  return inches * 2.54
}

console.log(convertInchesToCentimeters(120)) //304.8
function myFavoriteSong() {
  return { title: 'Orion', artist: 'Metallica', durationInSeconds: 507 }
}

console.log(myFavoriteSong()) //{title: "Countdown", artist: "Beyonce", durationInSeconds: 212}

function isItExpensive(item) {
  if (item.price === null) return 'no data'
  return item.price >= 100
}

var appleWatch = { price: 400 }
var applesAndWatches = { price: 30 }
var watchingApples = { price: null }

console.log(isItExpensive(appleWatch)) //true
console.log(isItExpensive(applesAndWatches)) //false
console.log(isItExpensive(watchingApples)) //"no data"

function introduceMe(name, numPets) {
  return `Hi, I am ${name} and I have ${numPets} pet(s)`.toUpperCase() // "excitedly" it said
}

console.log(introduceMe('Alex', 2)) //"Hi I am Alex and I have 2 pet(s)"
console.log(introduceMe('Sam', 0)) //"Hi I am Sam and I have 0 pet(s)"

function nextTwoBusTimes(timesArr) {
  return `The next 2 busses arrive in ${timesArr[0]} and ${timesArr[1]} minutes.`
}

var bus10Schedule = [12, 24, 35, 47, 60]
console.log(nextTwoBusTimes(bus10Schedule)) //"The next 2 busses arrive in 12 and 24 minutes."
function nextAndLastBusTimes(timesArr) {
  return `The next bus is in ${timesArr[0]} minutes. The last bus is in ${
    timesArr[timesArr.length - 1]
  } minutes.`
}

var bus10Schedule = [12, 24, 35, 47, 60]
console.log(nextAndLastBusTimes(bus10Schedule)) //"The next bus is in 12 minutes. The last bus is in 60 minutes."
