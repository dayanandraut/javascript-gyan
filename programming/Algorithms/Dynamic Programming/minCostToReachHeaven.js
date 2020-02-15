/**
 * PROBLEM STATEMENT
 * There is a n-stairs to reach heaven. Each stair has fee associated to it. Once the fee is paid, you can take 1 step, 2 step or 3 steps. Find the minimum price needed to pay
 * 
 * SOLUTION
 * minFee(n) = min (
 *                  minFee(n-1)+fee(n-1),
 *                  minFee(n-2)+fee(n-2),
 *                  minFee(n-3)+fee(n-3),
 * ) 
 */

 function findMinimumFee(n, fee){
     // assume we are on 0th stair. So, we can go to 1st, 2nd and 3rd stairs with fee[0] because that's the minimum
     let minFee = []
     // minFee[i] = minimum fee to reach ith stair 
     minFee[0] = 0 // because we are already there
     minFee[1] = minFee[2] = minFee[3] = fee[0]
     for(let i=4;i<=n;i++){
         minFee[i] = Math.min(minFee[i-1]+fee[i-1], minFee[i-2]+fee[i-2], minFee[i-3]+fee[i-3])
     }
     return minFee[n]
 }

 // Test
 let n = 5
 let feeArr = [2,1,3,1,2]
 console.log(findMinimumFee(n, feeArr))