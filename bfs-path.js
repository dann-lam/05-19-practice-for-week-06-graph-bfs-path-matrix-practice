function findNeighbors(node, matrix) {
  let result = []
//   console.log(node)
    // Up
      let row = node[0]
      let column = node[1]
      if(row-1 >= 0) {
          result.push([row-1,column])
      }
    // Down
    if(row + 1 <= matrix.length - 1) {
        result.push([row+1,column])
    }
    // Left
    if(column-1 >= 0) {
        result.push([row,column-1])
    }
    // Right
    if(column+1 <= matrix[row].length-1) {
        result.push([row,column+1])
    }

    // Your code here
    return result
}


function bfsPath(matrix, startNode, endValue) {
    // let currentNode = matrix[startNode[0]][startNode[1]]
    // console.log("This is our currentNode " + currentNode)
    // console.log("This is our startNode " + startNode)
    //console.log(endValue)
    let queue = [startNode]
    let visited = new Set();
    visited.add(startNode.toString())
    let resultArr = [];

    while(queue.length){
        let currentValue = queue.shift()
        let currentNode = matrix[currentValue[0]][currentValue[1]]
        resultArr.push(currentValue)
        //console.log(currentValue)

        if(currentNode === endValue) return resultArr;

        let neighbors = findNeighbors(currentValue, matrix)

        //let neighbors of neighbors
        for(let neighbor of neighbors){
            if (!visited.has(neighbor.toString())){
                queue.push(neighbor)
                visited.add(neighbor.toString())
            }
            //I need to go through the entire matrix and check if coordinates are inside "visited"
            //So I need to push the coordinates into "visited"
        }
    }
    return false;
}
/*  let queue = [[start]];
  // let startNode = [start];
  let visited = new Set();
  visited.add(start);
  let counter = 0;
  while (queue.length) {
    console.log("While loop is on loop # " + counter)
    console.log({ queue });
    console.log({ visited });
    let currentPath = queue.shift();
    let currentNode = currentPath[currentPath.length - 1];
    console.log({ currentPath });
    console.log({ currentNode });

    if (currentNode === end) return currentPath.length - 1; //Returns
    //Check if the last ele is end

    let neighbors = adjList[currentNode];
    console.log("My neighbors are " + neighbors)
    console.log("Begin forEach on loop #" + counter)
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push([...currentPath, neighbor]);
        console.log("Queue looks like this after push " + queue)
        visited.add(neighbor);
        console.log("Neighbors look like this after add " + neighbor)
      }
    });
    console.log("End forEach on loop #" + counter)
    counter++
  }
  return false; */

// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
