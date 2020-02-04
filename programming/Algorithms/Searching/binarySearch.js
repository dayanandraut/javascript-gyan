/**
 * Binary Search Implementation
 * Discards half of the inputs at each iteration
 * Time complexity : 0(logn)
 * Applicable only if the list is sorted
 */

// Iterative Approach
/**
 * Returns the index of key in the list
 * @param {number[]} list 
 * @param {number} key 
 * @returns index of the key in the list
 */
function binarySearchIter(list, key){
    let length = list.length
    let low = 0
    let high = length - 1
    while(low<=high){
        let medium = Math.floor((high+low)/2)
        if(list[medium]===key) return medium
        else if(key<list[medium]) high = medium - 1
        else low = medium + 1
    }  
    return undefined  
}

// Recursive approach
function binarySearchRec(list, key, high, low){
    if(low>high) return undefined
    let medium = Math.floor((high + low)/2)
    if(key===list[medium]) return medium
    else if(key<list[medium]) return binarySearchRec(list,key,medium-1,low)
    else  return binarySearchRec(list,key,high,medium+1)
}

// test
let grades = [1, 5, 9, 10, 17, 21]
console.log(binarySearchIter(grades, 10)) // 3
console.log(binarySearchIter(grades, 99)) // undefined 

console.log(binarySearchRec(grades, 17, grades.length-1, 0)) // 4
console.log(binarySearchRec(grades, 37, grades.length-1, 0)) // undefined

