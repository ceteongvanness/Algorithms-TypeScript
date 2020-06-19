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
  
  export function rightSiblingTree(root: BinaryTree) {
    mutate(root, null, null);
      return root;
  }
  
  function mutate(node: BinaryTree | null, parent: BinaryTree | null, isLeftChild: boolean | null){
      if (node === null) return;
      const {left, right} = node;
      mutate(left, node, true);
      if(parent === null){
          node.right = null;
      } else if (isLeftChild){
          node.right = parent.right;
      } else {
          if (parent.right === null){
              node.right = null;
          } else {
              node.right = parent.right.left;
          }
      }
      mutate(right, node, false);
  }
    
  