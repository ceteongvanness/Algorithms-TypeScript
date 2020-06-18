export function minHeightBst(array: number[]) {
    return constructMinHeightBst(array, null, 0, array.length - 1);
  }
  
  function constructMinHeightBst(array: number[], bst: BST | null, startIdx: number, endIdx: number){
      if (endIdx < startIdx) return;
      const midIdx = Math.floor((startIdx + endIdx) / 2);
      const valueToAdd = array[midIdx];
      if (bst === null){
          bst = new BST(valueToAdd);
      } else {
          bst.insert(valueToAdd);
      }
      constructMinHeightBst(array, bst, startIdx, midIdx - 1);
      constructMinHeightBst(array, bst, midIdx + 1, endIdx);
      return bst;
  }
  
  export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value: number) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }  
  