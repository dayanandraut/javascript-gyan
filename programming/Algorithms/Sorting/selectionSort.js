// Implementation of Selection sort
// Time complexity : O(n^2)
// No extra space

function selectionSort(A){
    const n = A.length
    for(let i = 0; i<n; i++){
        let minIndex = i
        // record the index of min value
        for(let j = i+1 ; j<n; j++){
            if(A[j]<A[minIndex]) minIndex = j
        }
        // swap min with A[i]
        let temp = A[i]
        A[i] = A[minIndex]
        A[minIndex] = temp
    }
    return A
}

// test
let marks = [89,72,63,90,60, 88]
console.log(selectionSort(marks))