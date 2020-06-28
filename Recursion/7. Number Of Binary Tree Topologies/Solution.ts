export function numberOfBinaryTreeTopologies(n: number) {
    if (n === 0) return 1;
      let numberOfTrees = 0;
      for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++){
          const rightTreeSize = n - 1 - leftTreeSize;
          const numberOfLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize);
          const numberOfRightTrees = numberOfBinaryTreeTopologies(rightTreeSize);
          numberOfTrees += numberOfLeftTrees * numberOfRightTrees;
      }
      return numberOfTrees;
  }
  
  