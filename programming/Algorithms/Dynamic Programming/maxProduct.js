/**
 * PROBLEM STATEMENT
 * Split a positive number into at least two parts such that their product is maximum
 * 
 * SOLUTION
 * maxRes[n] = max(
 *                  1 x maxRes[n-1],
 *                  2 x maxRes[n-2],
 *                  i x maxRes[n-i],
 *                  ....
 *                  (n-1) x maxRes[1]
 *                  )
 */

 function findMaxSplit(n){
     let maxRes = []
     maxRes[0] = 0
     maxRes [1] = 0
     maxRes[2] = 1
     for(let i = 3; i<=n; i++){
         maxRes[i] = -Infinity
         for(let j = i-1; j>0; j--){
             maxRes[i] = Math.max(maxRes[i], j*maxRes[i-j], j*(i-j))
         }
     }

     return maxRes[n]
 }

 console.log(findMaxSplit(5)) // 6
 console.log(findMaxSplit(6)) // 9
 console.log(findMaxSplit(7)) // 12
 console.log(findMaxSplit(10)) // 36


