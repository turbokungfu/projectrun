const myBoolean = new Boolean(true)

console.log(myBoolean == true)
console.log(myBoolean === true)


const myString = 'Hello, world!'

// Find an index
4
console.log(myString.indexOf('o'))

// Replace a substring
console.log(myString.replace('world', 'universe'))
"Hello, universe!"

{const myNumber = 42
const myString = '100.5'

console.log(myNumber.toString())
console.log(Number(myString))
console.log(parseInt(myString))}

const myObject = {
    name: 'Devin',
    age: 29,
  }

  console.log(myObject)
  console.log(myObject['name'])
  console.log(myObject.name)

  const myArray = ['a', 'b', 'c', 'd', 'e']
  console.log(myArray[0])
  console.log(myArray.length)
  console.log(myArray.slice(1, 4))

  function add5(myNumber) {
    return myNumber + 5
  }
  console.log(add5(2))
  console.log([0, 42, 100].map(add5))
  console.log([0, 42, 100].map(myNumber => myNumber + 5))

