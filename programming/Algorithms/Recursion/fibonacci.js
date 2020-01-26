// Fibonacci Sequence : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ....
// Recursion implementation of Fibonacci Sequence
// Time complexity : O(branch ^ depth), where branch = 2, depth = n . 
// O(2^n)
function RecFibonacci(index){
    // base case
    if(index<=1) return index
    // recursion case
    return RecFibonacci(index - 1) + RecFibonacci(index - 2)
}

console.log(RecFibonacci(1)) // 1
console.log(RecFibonacci(6)) // 8
console.log(RecFibonacci(40)) // 102334155 (took a long time to calculate)

// Iterative implementation of Fibonacci Sequence
// Time complexity : O(n)
// Space complexity : O(n)
function IterFibonacci(index){
    let fiblist = [0,1]
    for(let i=2; i<=index;i++){
        fiblist.push(fiblist[i-1]+fiblist[i-2])
    }    
    return fiblist[index]
}

console.log(IterFibonacci(1)) // 1
console.log(IterFibonacci(6)) // 8
console.log(IterFibonacci(40)) // 102334155 (Very faster than recursion approach)