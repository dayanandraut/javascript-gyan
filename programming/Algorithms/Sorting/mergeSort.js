// Merge Sort Implementation
// Takes O(n) space
// Time complexity O(nlogn)
// [TODO] Best scenario : ?
function mergeSort(list){
    let lengthOfList = list.length
    // base case
    if(lengthOfList<=1) return list

    // recursive case
    let middle = Math.floor(lengthOfList/2)
    // divide the list into two halves
    let left = list.slice(0,middle)
    let right = list.slice(middle)
    //console.log("left: ", left, "right: ", right)
    // recursively sort left and right and merge them

    return merge(mergeSort(left), mergeSort(right))
}

function merge(leftHalf, rightHalf){
    let leftPointer = 0
    let rightPointer = 0
    let result = []
    //console.log("leftHalf:",leftHalf,"rightHalf: ", rightHalf)
    while(leftPointer<leftHalf.length && rightPointer<rightHalf.length){
        if(leftHalf[leftPointer]<rightHalf[rightPointer]){
            result.push(leftHalf[leftPointer])
            leftPointer++
        }else{
            result.push(rightHalf[rightPointer])
            rightPointer++
        }
    }
    return result.concat(leftHalf.slice(leftPointer)).concat(rightHalf.slice(rightPointer))
}

// test
var heights = [172, 150, 160, 182, 190, 200, 183]
console.log(mergeSort(heights)) // [ 150, 160, 172, 182, 183, 190, 200]