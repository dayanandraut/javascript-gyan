// There are 3 ways to create function in Js

// WAY 1 : use function keyword
function addTwoNumbers(num1, num2){
    console.log(num1+num2)
  }
  
addTwoNumbers(8,9) // 17

// WAY 2 : store function in variable
const greet = function(name){
    console.log(`Hi ${name}, Good morning`)
}

greet("Daya") //Hi Daya, Good morning

// WAY 1 vs WAY 2
// the function can be called anywhere irrespective of where it is defined in way 1
// the function can be called only after the definition of function in way 2
// so, addTwoNumbers can be called anywhere in the code, but greet can be called only after the function definition is assigned

// WAY 3 
// Arrow function (lambda function)
const findDifference = (num1, num2) => num1-num2 
console.log(findDifference(10,4)) // 6

const callMe = () =>{
    console.log("Calling you")
}

callMe() // Calling you