// Recursion implementation
// O(n) , n = no of characters
function recReverseString(str){
    // base case
    if(str=="") return ""
    // recursion case
    return recReverseString(str.substr(1)) + str.charAt(0)
}

console.log(recReverseString("daya")) // ayad
console.log(recReverseString("Welcome")) // emocleW

// Iterative implementation
// O(n) , n = no of characters
function iterReverseString(str){
    let letters  = str.split("")
    let revStr = ""
    for(let i=letters.length-1;i>=0;i--)
        revStr += letters[i]

    return revStr
}

console.log(iterReverseString("daya")) // ayad
console.log(iterReverseString("Welcome")) // emocleW