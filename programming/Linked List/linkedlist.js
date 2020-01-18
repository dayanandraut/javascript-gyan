// Linked List 
/*
REFERENCE
    1. Why is linked list better than Array?
    -  Insertion and Deletion in array causes shifting of elements, thereby reducing the performance, whereas in linked list, there is no need to shift

    2. Why is linked list better than hashtable?
    - Elements are unordered in hashtable, whereas in linked list, elements are ordered according to their insertion order

    3. iteration vs traversal
    - traversal is when length is unknown (linked list)
    - iteration is when length is known (array)
    - iteration is faster than traversal because elements are placed next to one another in memory in case of array, but elements are scattered in memory in linked list
*/
// Create Node class to store value and next pointer
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// Create LinkedList class
class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // appends node at last - O(1)
    append(value){
        let newNode = new Node(value)
        // case 1: when the linked list is empty
        if(!this.head){
            this.head = this.tail = newNode
        }

        // case 2: when the linked list already has some elements, append to tail and update tail
        else{
            this.tail.next = newNode
            this.tail = this.tail.next
        }

        // increase length
        this.length++
    }

    // prepend node at head - O(1)
    prepend(value){
        let newNode = new Node(value)
        // case 1: when the linked list is empty
        if(!this.head){
            this.head = this.tail = newNode
        }

        // case 2: when the linked list already has some elements, prepend to head and update head
        else{
            newNode.next = this.head
            this.head = newNode
        }

        // increase length
        this.length++
    }

    // traverse to index - O(n)
    traverseToIndex(index){
        let counter = 0  
        let currentNode = this.head      
        while(counter!==index && currentNode){
            counter++;
            currentNode = currentNode.next
        }
        return currentNode
    }

    // inserts value at index - O(n)
    insert(index, value){
        // if index <= 0, prepend
        if(index <=0 ) this.prepend(value)
        // if index >= length, append
        else if(index >= this.length) this.append(value)
        else{
            let leader = this.traverseToIndex(index-1)
            let follower = leader.next
            let newNode = new Node(value)
            // insert between leader and follower
            leader.next = newNode
            newNode.next = follower
            this.length++
        }
    }

    // deletes value based on index - O(n)
    remove(index){
        // if index <= 0, remove head, update new head
        if(index <=0 ){
            let nodeToBeRemoved = this.head
            this.head = nodeToBeRemoved.next
            this.length--;
            return nodeToBeRemoved
        }
        // if index >= length, throw error
        else if(index >= this.length){
            throw "Cannot delete :index greater than or equal to length of list"
        }
        else{
            let leader = this.traverseToIndex(index-1)
            let nodeToBeRemoved = leader.next
            // point the next of leader to the next of nodeToBeRemoved
            leader.next = nodeToBeRemoved.next
            this.length--
            return nodeToBeRemoved
        }

    }

    // prints the values of linked list
    printList(){
        let list = []
        let currentNode = this.head
        while(currentNode){
            list.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(list.join(" --> "))
    }
}

let fruits = new LinkedList()
fruits.append("Mango")
fruits.append("orange")
fruits.append("apple")
fruits.prepend("strawberry")
fruits.printList() // strawberry --> Mango --> orange --> apple
fruits.insert(2, "Jackfruit")
fruits.insert(0, "cherry")
fruits.insert(10, "Litchee")
fruits.printList() // cherry --> strawberry --> Mango --> Jackfruit --> orange --> apple --> Litchee
fruits.remove(0)
fruits.remove(2)
fruits.printList() // strawberry --> Mango --> orange --> apple --> Litchee
//fruits.remove(9) // Error : Cannot delete :index greater than or equal to length of list

// ----------------------------------------------
// CREATE A FUNCTION TO REVERSE THE LINKED LIST
const reverseLinkedList = (list)=>{
    let curr = list.head
    let futureTail = list.head
    let leader = null
    let follower = null
    while(curr && curr.next){
        follower = curr.next
        curr.next = leader
        leader = curr
        curr = follower
        follower = follower.next
    }
    curr.next = leader
    list.head = curr
    futureTail.next = null
    list.tail = futureTail
    return list
}

// lets test
let colors = new LinkedList()
colors.append("Blue")
colors.append("Yellow")
colors.append("White")
colors.append("Red")
colors.printList() // Blue --> Yellow --> White --> Red
let reverseColor = reverseLinkedList(colors)
reverseColor.printList() // Red --> White --> Yellow --> Blue
//console.log(reverseColor)

