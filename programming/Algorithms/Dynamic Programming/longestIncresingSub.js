/**
 * PROBLEM STATEMENT
 * From an array of integer, find the longest increasing subsequence 
 */

 function longestIncreasingSub(A){
     let LIS = new Array(A.length)
     LIS.fill(1)

     for(let i=1;i<A.length;i++){
         let tempLIS = []
         for(let j=i-1;j>=0;j--){
             if(A[j]<A[i]) tempLIS.push(LIS[j])
         }
         LIS[i] = 1 + Math.max(...tempLIS)
     }
     console.log(LIS)
     return LIS[A.length-1]
 }

 let list = [4,7,9,2, 10, 1, 8, 50]
 console.log(longestIncreasingSub(list)) // 5