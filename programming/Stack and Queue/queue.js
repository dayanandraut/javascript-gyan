// QUEUE - FIFO
/*
USEFULNESS: printer job, server requests, ticket booking
    - implement using linked list, not array. Why?
    - because dequeue operation where removing first item from array will cause shifting of all other items - inefficient perfomance
*/

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedListQueue{
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    // O(1) - adds item to the last of list
    enqueue(value){
        let node = new Node(value)
        // check if list is empty
        if(this.length==0){ // or first = last =null
            this.first = this.last = node
        }
        // else add the node to next of last and update last
        else{
            this.last.next = node
            this.last = this.last.next
        }

        // increase length
        this.length++
    }

    // O(1) - removes the first element from the list
    dequeue(){
        // check if list is empty
        if(this.length===0) // or this.first ==null
             return null

        let nodeToBeDeleted = this.first
        // check if the list has single element, update last also
        if(this.length===1){ // this.first===this.last
            this.last = this.last.next
        }

        this.first = this.first.next
        this.length--
        return nodeToBeDeleted
    }

    // O(1) - returns the first item in the list
    peek(){
        return this.first
    }

    printQueue(){
        let queue = []
        let curr = this.first
        while(curr){
            queue.push(curr.value)
            curr = curr.next
        }
        console.log("[first]: ", queue.join("-->"), " :[last]")
    }
}

// test

let users = new LinkedListQueue()
users.enqueue("Daya")
users.enqueue("Sagar")
users.enqueue("Deepak")
users.enqueue("Raju")
users.enqueue("Gauri")

users.printQueue() // [first]:  Daya-->Sagar-->Deepak-->Raju-->Gauri  :[last]
users.dequeue()
users.dequeue()
users.printQueue() // [first]:  Daya-->Sagar-->Deepak-->Raju-->Gauri  :[last]