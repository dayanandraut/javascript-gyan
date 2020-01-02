// Hello World Program
console.log("Hello World")

// There are 7 types (of values) in Javascript
// 1. number (1,5,97, NaN)
// 2. string ('Daya', "Raut", `My name is ${name}`)
console.log("Daya "+"Nand") // Daya Nand
console.log(10+"5") // 105
console.log(10-"5") // 5
console.log("Daya" - "Nand") // NaN
// 3. boolean (true, false)
// false : false, "", 0, -0, null, NaN
// true : everything except false
// 4. undefined
// 5. null
/* 
null is an assigned value. It means nothing.
undefined means a variable has been declared but not defined yet.
null is an object. undefined is of type undefined.
null !== undefined but null == undefined.
*/
// 6. symbol (new in ES6)
// 7. object

// JavaScript Variables
var name = "Dayanand"
let numOfStudents = 80
const pi = 3.14
console.log("My name is", name)
console.log("I trained together with "+numOfStudents+ "students")
console.log(`In mathematics ${pi} is special.`)

// write a sample code for login
let userName = "daya@blackhat.com"
let password = "black$123"

if(userName==="daya@blackhat.com" && password==="black$123"){
  console.log(`You are logged in as ${userName}`)
}else {
  console.log("Invalid username or password")
}