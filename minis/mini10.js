// For node versions prior to 11 (and aren't one louder)
if (parseInt(process.version.slice(1, 3)) < 11)
  Array.prototype.flat = function () {
    return this.reduce((a, e) => a.concat(e), [])
  }

// Write a function collectionConverter that takes an object or an array and returns 
// a new collection in a different format (object to array or array to object).
var arrZoo = ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']
var objZoo = { zebra: 4, rhino: true, monkeys: 'many', tiger: 'siberian' }

function collectionConverter(collection) {

  function convertArrayToObject(array) {
    const arrayCopy = array.slice()
    const object = {}

    while (arrayCopy.length) {
      object[arrayCopy.shift()] = arrayCopy.shift()
    }
    return object
  }

  function convertObjectToArray(object) {
    return Object.entries(object).flat()
  }

  return Array.isArray(collection)
    ? convertArrayToObject(collection)
    : convertObjectToArray(collection)

}

console.log(collectionConverter(arrZoo)) // { zebra: 4, rhino: true, monkeys: 'many' tiger: 'siberian'}
console.log(collectionConverter(objZoo)) // ['zebra', 4, 'rhino', true, 'monkeys', 'many', 'tiger', 'siberian']
