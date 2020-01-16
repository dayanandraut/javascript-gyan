// Find the first repeated number from an array
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    var unique = {}
    for(let i = 0; i < input.length; i++){
        if(unique[input[i]]) return input[i]
        else unique[input[i]] = true
    }
    return undefined
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

let s = [2,5,5,2,3,5,1,2,4]
console.log(firstRecurringCharacter(s)) // 5
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])) // 2
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])) // 1
console.log(firstRecurringCharacter([2,3,4,5])) // undefined

/*
REFERENCE
var s = {}
s.1 = "Something" // gives error
s[1] = "something" // works fine

s.t = "something" // works fine
s["t"] = "something" // works

*/
