# Recursion

- A function that calls (refers to) itself, until it meets the **Base Case** or **stack overflow** happens.
- Useful when the task has repeated subtasks
- **Base case** : a condition that terminates the recursion 


## Using Recursion
1.	Identify the base case.
2.	Identify the recursive case.
3.	Get closer to the base case
4.	Usually recursion has 2 returns -
	- Return value of **base case**
	- Return value of **recursive case**

## Recursion Vs Iteration

> *Anything that can be implemented recursively can be implemented iteratively(loops).*
#### Recursion PROs
1. Recursion keeps the code **DRY**
2. Intuitive and more readable
3. Has lesser code compared to iterative version

#### Recursion CONs
1. It occupies large **Stack** , which can cause **Stack overflow**
2. Time complexity is **O**(*branch* ^ *depth*) , which is **exponential**

## When to use Recursion
> When using tree, or converting something into tree
> When depth is **unknown**
> For *BFS* or *DFS*
> Divide and Conquer Approach

#### PROBLEMS SOLVED
1. [FACTORIAL](factorial.js)
2. [FIBONACCI](fibonacci.js)
3. [REVERSE STRING](reverseString.js)
