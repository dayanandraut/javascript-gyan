/**
 * QuickSort Implementation (Using rightmost element as pivot)
 * Worst Time complexity : O(n^2) , when the list is already sorted
 * Worst Time complexity can be improved if we use randomized pivot selection approach
 * Average Time complexity: O(nlogn)
 * Constant space. Doesn't require additional space
 * 2 steps:
 *      - partition 
 *      - sort
 */

function quickSort(list, lowestIndex, highestIndex){
    
    if(lowestIndex<highestIndex){
        // divide the list into two : 1. Left of pivot 2. Right of pivot
        let pivot = partion(list, lowestIndex, highestIndex)
        quickSort(list, lowestIndex, pivot-1)
        quickSort(list, pivot+1, highestIndex)
    }
}

function partion(list, lowestIndex, highestIndex){
    let pivot  = list[highestIndex]
    let i = lowestIndex
    for(let j = lowestIndex; j<highestIndex; j++){
        if(list[j]<pivot){
            // swap list[j] and list[i] and increase i
            let temp = list[j]
            list[j] = list[i]
            list[i] = temp

            i++
        }
    }
    // finally swap list[i] with pivot and return i, which is the point for partition
    let temp = list[i]
    list[i] = pivot
    list[highestIndex] = temp

    return i

}

// driver function to sort

function mySort(list){
    quickSort(list, 0, list.length-1)
}

// lets test

let marks = [90,45,78,81,94,63,72,91, 45]
console.log("Original: ",marks.join(",")) // Original:  90,45,78,81,94,63,72,91,45
mySort(marks)
console.log("Sorted: ", marks.join(",")) // Sorted:  45,45,63,72,78,81,90,91,94  

