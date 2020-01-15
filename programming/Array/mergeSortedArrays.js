// Given two sorted arrays, merge them in a such way that the resulting array is also sorted

const mergeSortedArrays = (A,B)=>{
    // case 1: if one of the arrays is empty
    if(A.length===0) return B
    if(B.length===0) return A

    // case 2: none of arrays are empty
    let i = 0, j = 0
    let mergedArray = []
    // iterate over A and B and fill mergedArray with the lower value
    while(i<A.length && j<B.length){
        if(A[i]<=B[j]) {
            mergedArray.push(A[i])
            i++
        }else{
            mergedArray.push(B[j])
            j++
        }
    }

    // fill the rest elements
    while(i<A.length) {
        mergedArray.push(A[i])
        i++
    }

    while(j<B.length) {
        mergedArray.push(B[j])
        j++
    }

    return mergedArray
}

let A = [0,3,4,31], B = [4,6,30]
let R = mergeSortedArrays(A,B)
console.log("Input : ",A, B)
console.log("Output: ",R)

/*
Input :  [ 0, 3, 4, 31 ] [ 4, 6, 30 ]
Output:  [ 0, 3, 4, 4, 6, 30, 31 ]
*/

// In JS 
// in an array, spread A and B and then sort() the resultant array
const mergeAndSort = (A,B) => [...A, ...B].sort((a,b)=> a>=b) 


console.log(mergeAndSort([1,8,9],[2,4,12,17])) // [ 1, 2, 4, 8, 9, 12, 17 ]