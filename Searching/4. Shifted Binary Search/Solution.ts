export function shiftedBinarySearch(array: number[], target: number) {
    return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
  }
  
  function shiftedBinarySearchHelper(array: number[], target: number, left: number, right: number): number {
      if (left > right) return -1;
      const middle = Math.floor((left + right) / 2);
      const potentialMatch = array[middle];
      const leftNum = array[left];
      const rightNum = array[right];
      if(target === potentialMatch){
          return middle;
      } else if (leftNum <= potentialMatch){
          if (target < potentialMatch && target >= leftNum){
              return shiftedBinarySearchHelper(array, target, left, middle - 1);
          } else {
              return shiftedBinarySearchHelper(array, target, middle + 1, right);
          }
      } else {
          if (target > potentialMatch && target <= rightNum){
              return shiftedBinarySearchHelper(array, target, middle + 1, right);
          } else {
              return shiftedBinarySearchHelper(array, target, left, middle - 1);
          }
      }
  }
  

  
  