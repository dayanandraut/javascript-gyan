/**
 * PROBLEM STATEMENT
 * You have n houses. Each house has some amount. You have to steal maximum amount, but you cannot steal two adjacent houses.
 * 
 * SOLUTION
 * maxAmount[i] = max(maxAmount[i-2]+house[i-1], maxAmount[i-1])
 * Note: house[i] = amount at ith house (it starts with 0)
 */

function findMaxAmount(house){
    // let maxAmount[i] = max burglary amount for i  houses
    let maxAmount = []
    maxAmount[0] = 0 // if there is no house, maxAmount = 0
    maxAmount[1] = house[0] // If only one house is there, rob that house

    let totalhouse = house.length;
    for(let i=2;i<=totalhouse; i++){
        maxAmount[i] = Math.max(maxAmount[i-2] + house[i-1], maxAmount[i-1])
    }
    return maxAmount[totalhouse]
}

// Test
let h = [3,8,10,4,1,7,2]
console.log(findMaxAmount(h)) // 20