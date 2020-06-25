export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    if (this.head === null){
			this.head = node;
			this.tail = node;
			return;
		}
		this.insertBefore(this.head, node);
  }

  setTail(node: Node) {
    if(this.tail === null){
			this.setHead(node);
			return;
		}
		this.insertAfter(this.tail, node);
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
		this.remove(nodeToInsert);
		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;
		if(node.prev === null){
			this.head = nodeToInsert;
		} else {
			node.prev.next = nodeToInsert;
		}
		node.prev = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
		this.remove(nodeToInsert);
		nodeToInsert.prev = node;
		nodeToInsert.next = node.next;
		if (node.next === null){
			this.tail = nodeToInsert;
		} else {
			node.next.prev = nodeToInsert;
		}
		node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    if (position === 1){
			this.setHead(nodeToInsert);
			return;
		}
		let node = this.head;
		let currentPosition = 1;
		while (node !== null && currentPosition++ !== position) node = node.next;
		if (node !== null){
			this.insertBefore (node, nodeToInsert);
		} else {
			this.setTail(nodeToInsert);
		}
		
  }

  removeNodesWithValue(value: number) {
    let node = this.head;
		while (node !== null){
			const nodeToRemove = node;
			node = node.next;
			if(nodeToRemove.value === value) this.remove(nodeToRemove);
		}
  }

  remove(node: Node) {
    if (node === this.head) this.head = this.head.next;
		if (node === this.tail) this.tail = this.tail.prev;
		this.removeNodeBindings(node);
  }

  containsNodeWithValue(value: number) {
    let node = this.head;
		while (node !== null && node.value !== value) node = node.next;
		return node !== null;
  }
	
	removeNodeBindings(node: Node){
		if (node.prev !== null) node.prev.next = node.next;
		if (node.next !== null) node.next.prev = node.prev;
		node.prev = null;
		node.next = null;
	}
}