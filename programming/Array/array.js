// Array Implemention
// In Js Array is an object with integer based keys

class MyArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    // O(1)
    get(index){
        return this.data[index]
    }

    // adds item to the last - O(1)
    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }

    // deletes item from the last - O(1)
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    // deletes index-th item - O(n)
    delete(index){
        const item = this.data[this.length-1]
        this.shiftLeft(index)
        return item
    }

    shiftLeft(index){
        for(let i = index; i<this.length-1;i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }

    shiftRight(index){
        for(let i = this.length; i>index;i--){
            this.data[i] = this.data[i-1]
        }
        
        this.length++
    }

    // insert item at index-th position - O(n)
    insert(index, item){
        this.shiftRight(index)
        this.data[index] = item
        return this.length
    }
    
}

// test array and it's operations
let fruits = new MyArray()
console.log(fruits)
fruits.push('apple')
fruits.push('kiwi')
fruits.push('orange')
console.log(fruits)
console.log(fruits.pop())
fruits.insert(1, 'mango')
console.log(fruits)
fruits.delete(0)
console.log(fruits)