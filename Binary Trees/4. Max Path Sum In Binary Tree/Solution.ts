class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function maxPathSum(tree: BinaryTree) {
    const [_, maxSum] = findMaxSum(tree);
      return maxSum;
  }
  
  function findMaxSum(tree: BinaryTree | null){
      if(tree === null) return [0, -Infinity];
      
      const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
      const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
      const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
      
      const {value} = tree;
      const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
      const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
      const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);
      
      return [maxSumAsBranch, maxPathSum];
  }
    
  