export function shiftLinkedList(head: LinkedList, k: number) {
    let listLength = 1;
      let listTail: LinkedList = head;
      while (listTail.next !== null){
          listTail = listTail.next;
          listLength++;
      }
      
      const offset = Math.abs(k) % listLength;
      if (offset === 0) return head;
      
      const newTailPosition = k > 0 ? listLength - offset : offset;
      let newTail: LinkedList | null = head;
      for (let i = 1; i < newTailPosition; i++){
          newTail = newTail!.next;
      }
      
      const newHead = newTail!.next;
      newTail!.next = null;
      listTail.next = head;
      return newHead;
  }
  
  // This is the class of the input linked list.
  class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  
  