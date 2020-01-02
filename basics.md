# Javascript Basics

### Hello World Program
```console.log("Hello World")```

### Types in Javascript
There are *7 types* (of values) in Javascript
1. number (`1,5,97, NaN`)
2. string (`'Daya', "Raut", My name is ${name}`)
```
console.log("Daya "+"Nand") // Daya Nand
console.log(10+"5") // 105
console.log(10-"5") // 5
console.log("Daya" - "Nand") // NaN
```
3. boolean (true, false)
false : `false, "", 0, -0, null, NaN`
true : everything except `false`
4. undefined (`undefined`)
`var marks; //marks is declared but not assigned, and that's why undefined`
5. null (`null`)

null is an assigned value. It means nothing.
undefined means a variable has been declared but not defined yet.
null is an object. undefined is of type undefined.
null !== undefined but null == undefined.

6. symbol (new in ES6)
7. object

### Javascript Variables
1. var
2. let (new in ES6)
3. const (new in ES6)
*NOTE: Variable names start with letters or $ or _*
*STANDARD: Follow camelCase naming standard*
```
var firstName = 'daya'
let $num = 10
const _student = 'Raju'

var name = "Dayanand"
let numOfStudents = 80
const pi = 3.14
console.log("My name is", name)
console.log("I trained together with "+numOfStudents+ "students")
console.log(`In mathematics ${pi} is special.`)
```
- [ ]TO DO **var vs let vs const**

### Relational Operators
`===, ==, !==, !=, <=, >= <,>`

- ** `===` vs `==` **

Using the == operator (Equality). Compares only the  value

```
true == 1; //true, because 'true' is converted to 1 and then compared
"2" == 2;  //true, because "2" is converted to 2 and then compared
```
Using the === operator (Identity). Compares both value and type
```
true === 1; //false
"2" === 2;  //false

```

This is because the equality operator == does type coercion, meaning that the interpreter implicitly tries to convert the values before comparing.

On the other hand, the identity operator === does not do type coercion, and thus does not convert the values when comparing, and is therefore faster (as according to This JS benchmark test) as it skips one step. 

### Logical Operators
1. && (And)
2. || (Or)
3. ! (Not)

### Conditional statements
1. if
2. if ... else
3. if ... else if ... else
4. ternary
5. switch ... case


** write a sample code for login **
```
let userName = "daya@blackhat.com"
let password = "black$123"

if(userName==="daya@blackhat.com" && password==="black$123"){
  console.log(`You are logged in as ${userName}`)
}else {
  console.log("Invalid username or password")
}

```
