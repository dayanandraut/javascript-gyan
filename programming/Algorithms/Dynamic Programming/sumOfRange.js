/**
 * PROBLEM STATEMENT
 * Given an array of integers, find the sum of elements between i and j (i<=j) inclusive. Note that there are many such queries that you need to answer
 
 SOLUTION 1 (NAIVE WAY)
    loop from ith element to jth and sum them 
    [problem] : if there are many queries, calculations are redundant

 SOLUTION 2 (MEMOIZATION WAY)
 Store the sum upto ith element
 sum(i,j) = sumUpto(j) - sumUpto(i-1)
 */

 function prepareSumUpto(arr){
     // prepare an array to store sumUpto ith element
     let sumUpto = []
     sumUpto[0] = arr[0]
     for(let i = 1; i<arr.length; i++){
         sumUpto[i] = sumUpto[i-1] + arr[i]
     }
     
     return sumUpto
 }

 function SumOfRange(i, j, sumUptoList){    
     return sumUptoList[j] - sumUptoList[i-1]
 }

 // TEST
 let list = [3,6,7,1,9,2,6]
 let processedList = prepareSumUpto(list)
 console.log(SumOfRange(1,3, processedList)) // 14
 console.log(SumOfRange(3,5, processedList)) // 12