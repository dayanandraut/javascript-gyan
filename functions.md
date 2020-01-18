# Functions in Javascript
There are 3 ways to create function in Js
1. WAY 1 : use function keyword
2. WAY 2 : store function in variable
3. Arrow function (lambda function)

### WAY 1 : use function keyword

```javascript
function addTwoNumbers(num1, num2){
    console.log(num1+num2)
  }
  
addTwoNumbers(8,9) // 17
```

### WAY 2 : store function in variable

```javascript
const greet = function(name){
    console.log(`Hi ${name}, Good morning`)
}

greet("Daya") //Hi Daya, Good morning
```
## WAY 1 vs WAY 2
The function can be called anywhere irrespective of where it is defined in way 1. The function can be called only after the definition of function in way 2.So, `addTwoNumbers(num1,num2)` can be called anywhere in the code, but `greet(name)` can be called only after the function definition is assigned

### WAY 3 : Arrow function (lambda function)

```javascript
const findDifference = (num1, num2) => num1-num2 
console.log(findDifference(10,4)) // 6

const callMe = () =>{
    console.log("Calling you")
}

callMe() // Calling you
```
