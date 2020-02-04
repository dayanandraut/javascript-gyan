/**
 * DFS : Depth First Search 
 * Best when the solution are deep down the tree
 * Best to ensure whether the solution exists (path exist)
 * In tree, DFS can be done in 3 ways
 *  1. Preorder traversal (Root-Left-Right)
 *  2. Inorder traversal (Left-Root-Right)
 *  3. Postorder traversal (Left-Right-Root)
 */

/**
 * Preorder traversal of BST (Root-Left-Right)
 * @param {Node} node 
 * @param {number[]} result 
 * @returns the list of values of node in preorder
 */
function preOrderTraversal(node, result){
    if(node){
        result.push(node.value)
        preOrderTraversal(node.left, result)
        preOrderTraversal(node.right, result)
    }     
    return result
}

/**
 * Inorder traversal of BST (Left-Root-Right)
 * @param {Node} node 
 * @param {number[]} result 
 * @returns the list of values of node in preorder
 */
function inOrderTraversal(node, result){
    if(node){        
        inOrderTraversal(node.left, result)
        result.push(node.value)
        inOrderTraversal(node.right, result)
    }     
    return result
}

/**
 * Postorder traversal of BST (Left-Right-Root)
 * @param {Node} node 
 * @param {number[]} result 
 * @returns the list of values of node in preorder
 */
function postOrderTraversal(node, result){
    if(node){        
        postOrderTraversal(node.left, result)        
        postOrderTraversal(node.right, result)
        result.push(node.value)
    }     
    return result
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

// lets create our tree
let mytree = new Tree()
mytree.insert(15)
mytree.insert(12)
mytree.insert(17)
mytree.insert(9)
mytree.insert(13)
mytree.insert(16)
mytree.insert(25)

console.log("pre order: ", preOrderTraversal(mytree.root,[]))
console.log("In order: ", inOrderTraversal(mytree.root, []))
console.log("Post order: ", postOrderTraversal(mytree.root, []))

/**
 * pre order:  [ 15, 12, 9, 13, 17, 16, 25 ]
 * In order:  [9, 12, 13, 15, 16, 17, 25 ]
 * Post order:  [ 9, 13, 12, 16, 25, 17, 15 ]
 */