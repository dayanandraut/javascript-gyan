// Tree : non-linear ds where data can be traversed in multiple ways
// Usefulness : DOM elements, File structure
// Implement Binary Search Tree
// insert O(logn)
// lookup O(logn)
// delete O(logn)

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

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

    // delete : O(n)
    delete(value){
        let curr = this.root
        let parent = this.root
        while(curr){
            if(value===curr.value){

            }else if(value<curr.value){
                curr = curr.left
            }else{
                curr = curr.right
            }
        }
        return undefined
    }

    // looks for value : O(logn)
    lookup(value){
        // if the tree is empty
        if(!this.root) return false
        let curr =  this.root
        while(curr){
            if(value===curr.value) return curr
            else if(value<curr.value) curr = curr.left
            else curr = curr.right
        }
        // when value is not found
        return false
    }
    
}

// in order traversal : LTR
function inOrderTraverse(node){
    if(node.left) inOrderTraverse(node.left)
    console.log(node.value)
    if(node.right) inOrderTraverse(node.right)        
}

function traverse(node){
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//JSON.stringify(traverse(tree.root))

let tree = new Tree()
tree.insert(20)
tree.insert(5)
tree.insert(23)
tree.insert(2)
tree.insert(7)
tree.insert(22)
tree.insert(30)
//console.log(JSON.stringify(tree))
//inOrderTraverse(tree.root)
console.log(tree.lookup(23))
console.log(tree.lookup(19))
console.log(tree.lookup(900))
