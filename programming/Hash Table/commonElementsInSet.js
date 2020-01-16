// Given 2 arrays find the common elements

// Traditional approach
// Loop over an Array A and for each element a in A, check if a exists in B
// O(n*m)
const getCommon = (A,B) =>{
    var common = []
    for(let i = 0; i<A.length; i++){
        for(let j = 0; j<B.length; j++){
            if(A[i] === B[j]){
                 common.push(A[i])
                 break
            }
        }
    }
    return common
}

// Enhanced Approach
// Store A in hash table and then for each element b in B, check it is in hash table
// O(max(m,n))
const getCommonEnhanced = (A,B)=>{
    // prepare hash table for A
    let hashA = {}
    for(let i = 0; i<A.length;i++) hashA[A[i]] = true

    // iterate over B and check it's element's presence in hashA
    var common = []
    for(let i = 0; i<B.length;i++){
        // if present, store it in common
        if(hashA[B[i]]) common.push(B[i])
    }
    return common
}

let A = [ 5, 8, 2, 9]
let B = [9, 4, 1, 2, 7, 5]
console.log(getCommon(A,B)) // [5,2,9]
console.log(getCommonEnhanced(A,B)) // [9, 2, 5]