// Graph is used for representing real life relationships
// Graph has node called vertex
// vertices are connected with each other using edge
// Scaling is difficult in graph
/*
REPRESENTATION OF GRAPH
    1. EDGE LIST
    2. ADJACENCY LIST
    3. ADJACENCY MATRIX

TYPES OF GRAPH
    1. Directed and Undirected
    2. Weighted and Unweighted (Weight can be on node or edge)
    3. Acyclic and Cyclic 

DAG : Directed Acyclic Graph

Note: Linked list is a type of tree, and tree is a type of graph.
*/

// Graph implementation using adjacency list
class Graph{
    constructor(){
        this.numberOfNodes = 0
        this.adjacentList = {}
    }

    addVertex(node){
        this.adjacentList[node] = []
        this.numberOfNodes++
        return this.adjacentList[node]
    }
    
    // adds undirected edge between node1 and node2
    addEdge(node1, node2){
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }

    // to display the representation of graph
    showGraph(){
        // Object.keys() : retrieves the keys from object
        let nodes = Object.keys(this.adjacentList)
        for(let node of nodes){
            let list = this.adjacentList[node]
            console.log(node," --> ", list.join(" , "))
        }
    }
}

let graph = new Graph()
console.log(graph)
// lets add some vertices
graph.addVertex(2)
graph.addVertex(8)
graph.addVertex(4)
graph.addVertex(7)
graph.addVertex(5)
console.log("After adding vertices")
console.log(graph)
// lets add edges
graph.addEdge(2,5)
graph.addEdge(2,8)
graph.addEdge(4,8)
graph.addEdge(4,7)
console.log("After adding edges")
console.log(graph)
console.log("Adjacency list representation")
graph.showGraph()

/*
    OUTPUT
    
Graph { numberOfNodes: 0, adjacentList: {} }
After adding vertices
Graph {
  numberOfNodes: 5,
  adjacentList: { '2': [], '4': [], '5': [], '7': [], '8': [] }
}
After adding edges
Graph {
  numberOfNodes: 5,
  adjacentList: {
    '2': [ 5, 8 ],
    '4': [ 8, 7 ],
    '5': [ 2 ],
    '7': [ 4 ],
    '8': [ 2, 4 ]
  }
}
Adjacency list representation
2  -->  5 , 8
4  -->  8 , 7
5  -->  2
7  -->  4
8  -->  2 , 4
*/
