### DFS and BFS time complexity: O(n)
Because this is tree traversal, we must touch every node, making this O(n) where n is the number of nodes in the tree.

### BFS space complexity: O(n)
BFS will have to store at least an entire level of the tree in the queue (sample queue implementation). With a perfect fully balanced binary tree, this would be (n/2 + 1) nodes (the very last level). Best Case (in this context), the tree is severely unbalanced and contains only 1 element at each level and the space complexity is O(1). Worst Case would be storing (n - 1) nodes with a fairly useless N-ary tree where all but the root node are located at the second level.

### DFS space complexity: O(d)
Regardless of the implementation (recursive or iterative), the stack (implicit or explicit) will contain d nodes, where d is the maximum depth of the tree. With a balanced tree, this would be (log n) nodes. Worst Case for DFS will be the best case for BFS, and the Best Case for DFS will be the worst case for BFS.