export function rearrangeLinkedList(head: LinkedList, k: number) {
    let smallerListHead: LinkedList | null = null;
      let smallerListTail: LinkedList | null = null;
      let equalListHead: LinkedList | null = null;
      let equalListTail: LinkedList | null = null;
      let greaterListHead: LinkedList | null = null;
      let greaterListTail: LinkedList | null = null;
      
      let node: LinkedList | null = head;
      while (node !== null){
          if(node.value < k){
              [smallerListHead, smallerListTail] = growLinkedList(smallerListHead, smallerListTail, node);
          } else if (node.value > k){
              [greaterListHead, greaterListTail] = growLinkedList(greaterListHead, greaterListTail, node);
          } else {
              [equalListHead, equalListTail] = growLinkedList(equalListHead, equalListTail, node);
          }
          
          const prevNode = node;
          node = node.next;
          prevNode.next = null;
      }
      
      const [firstHead, firstTail] = connectLinkedLists(smallerListHead, smallerListTail, equalListHead, equalListTail);
      const [finalHead, _] = connectLinkedLists(firstHead, firstTail, greaterListHead, greaterListTail);
      return finalHead;
  }
  
  function growLinkedList(head: LinkedList | null, tail: LinkedList | null, node: LinkedList | null){
      let newHead = head;
      let newTail = node;
      
      if (newHead === null) newHead = node;
      if (tail !== null) tail.next = node;
      
      return [newHead, newTail];
  }
  
  function connectLinkedLists(
      headOne: LinkedList | null,
      tailOne: LinkedList | null,
      headTwo: LinkedList | null,
      tailTwo: LinkedList | null,
  ){
          const newHead = headOne === null ? headTwo : headOne;
          const newTail = tailTwo === null ? tailOne : tailTwo;
          
          if (tailOne !== null) tailOne.next = headTwo;
          
          return [newHead, newTail];
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