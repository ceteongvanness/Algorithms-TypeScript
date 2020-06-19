export function allKindsOfNodeDepths(root: BinaryTree) {
    let sumOfAllDepths = 0;
      let stack: Array<BinaryTree | null> = [root];
      while(stack.length > 0){
          const node = stack.pop() as BinaryTree | null;
          if (node === null) continue;
          sumOfAllDepths += nodeDepths(node);
          stack.push(node.left);
          stack.push(node.right);
      }
      return sumOfAllDepths;
  }
  
  function nodeDepths(node: BinaryTree | null, depth = 0): number {
      if(node === null) return 0;
      return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1);
  }
  
  // This is the class of the input binary tree.
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
    
  