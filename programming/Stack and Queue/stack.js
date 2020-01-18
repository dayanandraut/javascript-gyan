// STACK - LIFO [imagine a stack of plates]
/*
    - It can be implemented by both Array and Linked List
    - Array implementation is faster because elements are next to each other in array
    - USEFUL in browser history, function calls, UNDO operations
    - push() : O(1) 
    - pop() : O(1)
    - peek() : O(1)
*/

// LINKED LIST IMPLEMENTATION OF STACK
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// stack has a property top that points to the topmost item
class LinkedListStack{
    constructor(){
        this.top = null
    }

    // push: O(1) - point the new node to top and then update the top to new node
    push(value){
        let node = new Node(value)
        node.next = this.top
        this.top = node
    }

    // pop: O(1) - hold the top node. update top to its next. return holding node
    pop(){
        // if the list is empty
        if(!this.top) return null
        // if the list is not empty
        let topmost = this.top
        this.top = this.top.next
        return topmost
    }

    // peek : O(1) - return the top most node
    peek(){
        return this.top
    }

    printStack(){
        let items = []
        let curr = this.top
        while(curr){
            items.push(curr.value)
            curr = curr.next
        }
        console.log("[top]:",items.join(" --> "))
    }
}

// test the implementation
let history = new LinkedListStack()
history.push("google")
history.push("apple")
history.push("facebook")
history.printStack() // [top]: facebook --> apple --> google
//console.log(history.peek())
history.pop()
history.printStack() // [top]: apple --> google
history.pop()
history.pop()
history.printStack() // [top]:
console.log(history.pop()) // null