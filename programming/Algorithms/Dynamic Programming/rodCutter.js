/**
 * PROBLEM STATEMENT
 * You are given a rod of length 'n' and an array of prices of the pieces. Find the maximuj value that can be earned by cutting up the rod and selling the price.
 * 
 * SOLUTION
 * maxPrice[n] = max(price[i]+maxPrice[n-i]) for all 0<i<=n
 */

 function findMaxPriceOfRod(n, price){
    // maxPrice[i] = max price of rod of length i
     let maxPrice = []
     maxPrice [0]  = 0
     for(let i=1; i<=n;i++){
         maxPrice[i] = -Infinity
         for(let j=1; j<=i; j++){
             maxPrice[i] = Math.max(maxPrice[i],price[j]+maxPrice[i-j])
         }
     }
     console.log(maxPrice)
     return maxPrice[n]
 }

 // test
 let cost = [0,2,4,5,7]
 let n = 4
 console.log(findMaxPriceOfRod(n, cost))