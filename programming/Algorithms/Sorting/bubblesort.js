// Bubble sort implementation

// Time complexity : O(n^2)
// Space : no extra space
function bubbleSort(A){
    let n = A.length
    for(let i = 0; i < n; i++){
        let isSwapped = false 
        for(let j = 0; j < n -1 -i; j++){
            if(A[j]>A[j+1]){
                // swap
                let temp = A[j]
                A[j] = A[j+1]
                A[j+1] = temp
                isSwapped = true
            }
        }
        // if not swapped even once, the list is already sorted
        if(!isSwapped) break
    }
    return A
}

// test
let ratings = [3, 7, 8, 1, 9, 2, 6]
console.log(bubbleSort(ratings)) // [ 1, 2, 3, 6, 7, 8, 9]