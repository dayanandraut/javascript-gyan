/**
 * BFS : Breadth First Search
 * All the nodes of same level are traversed 
 * Best for finding the closest nodes (helpful: recommendation, friends of friends)
 * Good for finding the shortest path in unweighted graph
 * BFS uses queue to store the nodes of same level
 */
/**
 * Traverse BST using Breadth First Search (Iterative Approach)
 * @param {Node} node 
 * @returns list of nodes in BFS order
 */
function traverseBFS(node){
    let result = []
    let queue = []
    if(node) queue.push(node)
    while(queue.length){
        let temp =  queue.shift()
        result.push(temp.value)
        if(temp.left) queue.push(temp.left)
        if(temp.right) queue.push(temp.right)
    }
    return result
}

/**
 * Traverse BST using Breadth First Search (Recursive Approach) * 
 * @param {Node[]} queue 
 * @param {number[]} result 
 * @returns list of nodes in BFS order
 */
function traverseBFSrec(queue, result){
    if(!queue.length) return result
    let temp = queue.shift()
    result.push(temp.value)
    if(temp.left) queue.push(temp.left)
    if(temp.right) queue.push(temp.right)
    return traverseBFSrec(queue, result)
}

/**
 * Node class customized to implement BST
 */
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

/**
 * Implementation of Binary Search Tree
 */
class Tree{
    constructor(){
        this.root = null
    }

    insert(value){
        let node = new Node(value)
        // if root is empty
        if(!this.root){
             this.root = node
        }
        // else
        else{
            let curr = this.root
            while(true){
                // check for left side, ie, value < root
                if(value<curr.value){
                    // if left is empty, attach the node. else move the current
                    if(!curr.left){
                        curr.left = node
                        return
                    }
                    // else update the current
                    curr = curr.left
                }
                // check for right side, ie, value >= root
                else{
                    // if left is empty, attach the node. else move the current
                    if(!curr.right){
                        curr.right = node
                        return
                    }
                    // else update the current
                    curr = curr.right
                }
            }
                
        }
        
    }
}

// lets create a BST and do BFS on it
let mytree = new Tree()
mytree.insert(15)
mytree.insert(12)
mytree.insert(17)
mytree.insert(9)
mytree.insert(13)
mytree.insert(16)
mytree.insert(25)
/**
 * mytree structure
 *                  15
 *          12              17
 *      9       13      16      25
 */

console.log(traverseBFS(mytree.root)) // [ 15, 12, 17, 9, 13, 16, 25 ]
console.log(traverseBFSrec([mytree.root],[])) // // [ 15, 12, 17, 9, 13, 16, 25 ]

