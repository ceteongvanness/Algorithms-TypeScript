class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function reverseLinkedList(head: LinkedList) {
      let p1: LinkedList | null = null;
      let p2: LinkedList | null = head;
      while (p2 !== null){
          const p3: LinkedList | null = p2.next;
          p2.next = p1;
          p1 = p2;
          p2 = p3;
      }
      return p1!;
  }
  