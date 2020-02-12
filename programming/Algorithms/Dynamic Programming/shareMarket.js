/**
 * PROBLEM STATEMENT
 * In a given array, ith element is the price of stock on ith day. If you are permitted to complete 1 transaction (ie buy once and sell once), what is the maximum profit you can gain? you cannot sell a stock before you buy one.
 * 
 * SOLUTION
 * The maximum profit on ith day is the difference between the price on ith day and the least price before ith day. Find maximum price for each day and then return the maximum value from the list.
 */

 // IMPLEMENTATION
 // function to return maximum value from the list
 function maxValue(list){
     return Math.max(...list)
 }

 // function to find the maximum profit
 function maxProfit(arr){
     let profit = []
     let leastPrice = arr[0]
     for(let i = 0; i<arr.length;i++){
         if(arr[i]<leastPrice) leastPrice = arr[i]
         profit[i] = arr[i] - leastPrice
     }
     console.log(profit)
     return maxValue(profit)
 }

 // TEST
 const prices = [8,1,2,4,6,3]
 console.log("Maximum Profit is Rs", maxProfit(prices)) // 5