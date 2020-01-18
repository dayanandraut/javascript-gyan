// creating array

// empty array
let names = [] 
  
// array with elements
let games = ['basketball', 'cricket', 'football']

// to get length, use length property
console.log(games.length) // 3

// to add item, use push(item)
games.push('badminton')
console.log(games) // [ 'basketball', 'cricket', 'football', 'badminton' ]

// to get item, use index, 0<=index<length, otherwise undefined
console.log(games[2]) // football

// to remove last item, use pop()
console.log(games.pop()) // badminton
console.log(games) // [ 'basketball', 'cricket', 'football' ]

// to check for item, use includes(item)
console.log(games.includes('swimming')) // false
console.log(games.includes('cricket')) // true

// to sort in alphabetical order, use sort
games.push("abc")
games.sort()
console.log(games) // [ 'abc', 'basketball', 'cricket', 'football' ]

// to add item in the beginning, use unshift(item)
games.unshift("volleyball")
console.log(games) // [ 'volleyball', 'abc', 'basketball', 'cricket', 'football' ]

// to remove item in the beginning, use shift()
games.shift()
console.log(games) // [ 'abc', 'basketball', 'cricket', 'football' ]

// to delete item
delete games[2]
console.log(games) // [ 'abc', 'basketball', <1 empty item>, 'football' ]

// to reassign any item
games[2] = "polo"
console.log(games) // [ 'abc', 'basketball', 'polo', 'football' ]
games[10] = "golf"
console.log(games) //[ 'abc', 'basketball', 'polo', 'football', <6 empty items>, 'golf' ]

// OBJECT : key-value pair
// create empty object
let student = {}

// create object with fields
let professor = {
    name : "Dayanand",
    dept : "CSE",
    interest: "AI"
}

console.log(professor) // { name: 'Dayanand', dept: 'CSE', interest: 'AI' }

// to access field, use dot fieldname or named index
let profName = professor.name
let profInterest = professor['interest']
console.log(`${profName} is interested in ${profInterest}`) // Dayanand is interested in AI

// to modify fields
professor.name = "Raju"
console.log(professor) // { name: 'Raju', dept: 'CSE', interest: 'AI' }

// to remove fields
delete professor.dept
console.log(professor) // { name: 'Raju', interest: 'AI' }

// to add new fields
professor.age = 25
console.log(professor) // { name: 'Raju', interest: 'AI', age: 25 }

// to check for the existence of field/key in object
console.log("name" in professor) // true
console.log(professor.hasOwnProperty("name")) // true
console.log("salary" in professor) // false

// to add method
professor.teach = function(){
    console.log(`${this.name} is teaching`)
}

console.log(professor) // { name: 'Raju', interest: 'AI', age: 25, teach: [Function] }
professor.teach() // Raju is teaching

// object with fields and methods
var warrior = {
    name : "Luffy",
    power : "Devil's fruit",
    fight : function(){
        console.log(`${this.name} fights with ${this.power}`)
    }
}

console.log(warrior)
warrior.fight() // Luffy fights with Devil's fruit