// reverse a string
// ip: Daya Nand
// op: dnaN ayaD

// Traditional Approach
const reverseTraditionally = str =>{
    // check str is String
    if(str || typeof str==='string' ){
        let reversed = []
        let len = str.length
        for(i=len-1;i>=0;i--) reversed.push(str[i])
        return reversed.join('')
    }
    return "Input is invalid"
}

// Modern approach
// Array has reverse()
// convert string into array of chars with split('')
// reverse array of chars with reverse()
// join array elements with join('')
const reverseInbuilt = str => str.split('').reverse().join('')

// Enhanced modern approach
// use spread operator [...] to convert string into array

const reverseInbuiltEnhanced = str => [...str].reverse().join('')

// Test
let myStr = "Daya Nand"
console.log("reverseTraditionally : "+myStr+" -> "+reverseTraditionally(myStr))
console.log("reverseInbuilt : "+myStr+" -> "+reverseInbuilt(myStr))
console.log("reverseInbuiltEnhanced : "+myStr+" -> "+reverseInbuiltEnhanced(myStr))

/*
OUTPUT
reverseTraditionally : Daya Nand -> dnaN ayaD
reverseInbuilt : Daya Nand -> dnaN ayaD
reverseInbuiltEnhanced : Daya Nand -> dnaN ayaD
*/

/*
For Reference

"DAYA".split('')
(4) ["D", "A", "Y", "A"]

["D", "Y", "Y", "A"].reverse()
(4) ["A", "Y", "Y", "D"]

["A", "Y", "Y", "D"].join('')
"AYYD"

[..."DAYA"]
(4) ["D", "A", "Y", "A"]
*/