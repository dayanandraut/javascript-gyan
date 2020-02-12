/**
 * PROBLEM STATEMENT:
 * You want to reach heaven that is at the top of this staircase. The staircase has n steps. And at each step you can climb either 1 step or 2 steps further. In how many ways can you reach heaven?
 * 
 * SOLUTION:
 * Base condition: If there is 1 step, we can reach in 1 way
 * Assumption : If no steps are there, we can reach in 1 way, i.e., we are already there
 * Recursion case: We can reach n steps in f(n-1)+f(n-2) ways
 */

 // RECURSION IMPLEMENTATION
 function noOfWays(numberOfSteps){
     if(numberOfSteps<=1) return 1
     else return noOfWays(numberOfSteps-1)+noOfWays(numberOfSteps-2)
 }

 console.log(noOfWays(2)) //2
 console.log(noOfWays(3)) // 3
 console.log(noOfWays(4)) // 5
 console.log(noOfWays(5)) // 8

 // MEMOIZATION
 function findWays(n){
     let ways = []
     ways[0] = ways[1] = 1
     for(let i = 2; i<=n; i++){
         ways[i] = ways[i-1]+ ways[i-2]
     }
     return ways[n]
 }

 console.log("Using memoization")
 console.log(findWays(2)) //2
 console.log(findWays(3)) // 3
 console.log(findWays(4)) // 5
 console.log(findWays(5)) // 8
