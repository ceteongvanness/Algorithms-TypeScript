class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function findLoop(head: LinkedList) {
    let first: LinkedList = head.next!;
      let second: LinkedList = head.next!.next!;
      while (first !== second){
          first = first.next!;
          second = second.next!.next!;
      }
      first = head;
      while (first !== second){
          first = first.next!;
          second = second.next!;
      }
      return first;
  }
  