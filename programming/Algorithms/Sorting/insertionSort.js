// fast when the list is almost sorted . nearly O(n)
// Time complexity : O(n^2)
// No extra space

function insertionSort(A){
    const n = A.length
    for(let i = 1; i<n ; i++ ){
        let k = A[i]
        let j = i - 1
        while(j>=0 && k<A[j]){
            A[j+1] = A[j]
            j--;
        }
        A[j+1] = k        
    }
    return A
}

// test
let prices = [78,32,19,60,48, 90] 
console.log(insertionSort(prices))  // [ 19, 32, 48, 60, 78, 90 ]