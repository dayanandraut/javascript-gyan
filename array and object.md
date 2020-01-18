# Array
### creating array
```javascript
// empty array
let names = [] 
  
// array with elements
let games = ['basketball', 'cricket', 'football']
```
### METHODS IN ARRAY

* to get length, use length property
* to add item, use push(item)
* to get item, use index, 0<=index<length, otherwise it will return undefined
* to remove last item, use pop()
```javascript
console.log(games.length) // 3
games.push('badminton')
console.log(games) // [ 'basketball', 'cricket', 'football', 'badminton' ]
console.log(games[2]) // football
console.log(games[9]) // undefined 
console.log(games.pop()) // badminton
console.log(games) // [ 'basketball', 'cricket', 'football' ]
```
* to check for item, use includes(item)
* to sort in alphabetical order, use sort. Use lambda function inside sort while sorting number or any object
```javascript
console.log(games.includes('swimming')) // false
console.log(games.includes('cricket')) // true

games.push("abc")
games.sort()
console.log(games) // [ 'abc', 'basketball', 'cricket', 'football' ]
```
* to add item in the beginning, use unshift(item)
* to remove item in the beginning, use shift()
```javascript
games.unshift("volleyball")
console.log(games) // [ 'volleyball', 'abc', 'basketball', 'cricket', 'football' ]

games.shift()
console.log(games) // [ 'abc', 'basketball', 'cricket', 'football' ]
```
* to delete item
```javascript
delete games[2]
console.log(games) // [ 'abc', 'basketball', <1 empty item>, 'football' ]
```
* to reassign any item, use index. if index>length, it will create empty items
```javascript
games[2] = "polo"
console.log(games) // [ 'abc', 'basketball', 'polo', 'football' ]

games[10] = "golf"
console.log(games) //[ 'abc', 'basketball', 'polo', 'football', <6 empty items>, 'golf' ]
```

# OBJECT : key-value pair

* create  object
```javascript
// empty object
let student = {}

// object with fields
let professor = {
    name : "Dayanand",
    dept : "CSE",
    interest: "AI"
}

console.log(professor) // { name: 'Dayanand', dept: 'CSE', interest: 'AI' }
```

* to access field, use dot fieldname or named index
```javascript
let profName = professor.name
let profInterest = professor['interest']
console.log(`${profName} is interested in ${profInterest}`) // Dayanand is interested in AI
```

* to modify fields
```javascript
professor.name = "Raju"
console.log(professor) // { name: 'Raju', dept: 'CSE', interest: 'AI' }
```

* to remove fields
```javascript
delete professor.dept
console.log(professor) // { name: 'Raju', interest: 'AI' }
```

* to add new fields
```javascript
professor.age = 25
console.log(professor) // { name: 'Raju', interest: 'AI', age: 25 }
```

* to check for the existence of field/key in object
```javascript
console.log("name" in professor) // true
console.log(professor.hasOwnProperty("name")) // true
console.log("salary" in professor) // false
```

* to add method
```javascript
professor.teach = function(){
    console.log(`${this.name} is teaching`)
}

console.log(professor) // { name: 'Raju', interest: 'AI', age: 25, teach: [Function] }
professor.teach() // Raju is teaching
```
* object with fields and methods
```javascript
var warrior = {
    name : "Luffy",
    power : "Devil's fruit",
    fight : function(){
        console.log(`${this.name} fights with ${this.power}`)
    }
}

console.log(warrior)
warrior.fight() // Luffy fights with Devil's fruit
```
