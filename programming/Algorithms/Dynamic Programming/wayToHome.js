/**
 * PROBLEM STATEMENT
 * You are located at the top left corner of M x N grid. You can move either right or down at any point in time. Your home is located at the buttom right corner of this grid. In how many unique ways can you reach your home?
 * 
 * SOLUTION
 * ways to reach home = ways to reach home from right square + ways to reach home from down square
 */

 // IMPLEMENTATION
 function noOfUniqueWays(M,N){
     // create a matrix of M X N
     let matrix = []
     let arr = new Array(N)
     arr.fill(0)
     for(let i=0;i<M ;i++){         
         matrix[i] = arr
     }

     // fill last column with 1
     for(let i=0; i<M; i++) matrix[i][N-1] = 1

     // fill last row with 1
     for(let i=0; i<N; i++) matrix[M-1][i] = 1

     for(let i=M-2; i>=0; i--)
        for(let j=N-2; j>=0; j--)
            matrix[i][j] = matrix[i][j+1] + matrix[i+1][j]

    return matrix[0][0]

 }

 console.log(noOfUniqueWays(3,3)) // 6
 console.log(noOfUniqueWays(4,4)) // 20
 console.log(noOfUniqueWays(4,3)) // 10