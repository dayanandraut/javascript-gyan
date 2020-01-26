// Recursion implementation of Factorial
// Time complexity : O(branch ^ depth), where branch = 1, depth = n . So, O(n)
function RecFactorial(number){
    // base case
    if(number<=2) return number
    // recursion case
    return number * RecFactorial(number - 1)
}

// test
console.log(RecFactorial(5)) // 120
console.log(RecFactorial(10)) // 3628800

// Iterative implementation of Factorial
// Time Complexity : O(n)
function IterFactorial(number){
    let result = 1
    for(let i = 2; i<=number; i++){
        result *= i
    }
    return result
}

console.log(IterFactorial(5)) // 120
console.log(IterFactorial(10)) // 3628800
