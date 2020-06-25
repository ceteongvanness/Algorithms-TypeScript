class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
    let p1: LinkedList | null = headOne;
      let p1Prev: LinkedList | null = null;
      let p2: LinkedList | null = headTwo;
      while (p1 !== null && p2 !== null){
          if (p1.value < p2.value){
              p1Prev = p1;
              p1 = p1.next;
          } else {
              if (p1Prev !== null) p1Prev.next = p2;
              p1Prev = p2;
              p2 = p2.next;
              p1Prev.next = p1;
          }
      }
      if (p1 === null) p1Prev!.next = p2;
      return headOne.value < headTwo.value ? headOne : headTwo;
  }
  
  