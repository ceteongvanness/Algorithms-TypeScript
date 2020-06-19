class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
    parent: BinaryTree | null;
  
    constructor(value: number, parent: BinaryTree | null = null) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = parent;
    }
  }
  
  export function iterativeInOrderTraversal(tree: BinaryTree, callback: (node: BinaryTree) => void) {
    let previousNode: BinaryTree | null = null;
      let currentNode: BinaryTree | null = tree;
      while (currentNode !== null){
          let nextNode;
          if(previousNode === null || previousNode === currentNode.parent){
              if(currentNode.left !== null){
                  nextNode = currentNode.left;
              } else {
                  callback(currentNode);
                  nextNode = currentNode.right !== null ? currentNode.right : currentNode.parent;
              }
          } else if (previousNode === currentNode.left){
              callback(currentNode);
              nextNode = currentNode.right !== null ? currentNode.right : currentNode.parent;
          } else {
              nextNode = currentNode.parent;
          }
          previousNode = currentNode;
          currentNode = nextNode;
      }
  }
    
  