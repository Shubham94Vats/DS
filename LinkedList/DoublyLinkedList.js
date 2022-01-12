class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
} 

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  /*
   * Add item at the front of dll
   */

  addFront(new_data) {
    /* 1. allocate node
     * 2. put in the data */
    let new_Node = new Node(new_data);

    /* 3. Make next of new node as head and previous as NULL */
    new_Node.next = this.head;
    new_Node.prev = null;

    /* 4. change prev of head node to new node */
     if (this.head != null) this.head.prev = new_Node;

    /* 5. move the head to point to the new node */
    this.head = new_Node;
  }

  /*
   * Add item at the end of LL
   */

  append(data) {
    /* 1 & 2: Allocate the Node & Put in the data */
    const newNode = new Node(data);

    /* Check list empty then assign it to the head */
    if (this.head == null) {
      this.addFront(data);
      return;
    }

    /* 3. Traverse the whole list */
    let last = this.head;
    while (last.next != null) {
      last = last.next;
    }
    /* 4. Move the head to point to new Node */
    last.next = newNode;

    /* 7. Make last node as previous of new node */
    newNode.prev = last;
  }

  /*
   * Delete item at the front of LL
   */

  deleteFront() {
    /* Check list empty */
    if (this.head == null) {
      console.log('List is empty');
      return;
    }

    const list = this.head;
    this.head = list.next;
    return;
  }

  /*
   * Delete item at the end of LL
   */

  deleteEnd() {
    /* Check list empty */
    if (this.head == null) {
      console.log('List is empty');
      return;
    }

    let last = this.head;
    let prev = null;
    while (last.next != null) {
      prev = last;
      last = last.next;
    }

    prev.next = null;
    return;
  }

  /*
   * Prints the list items
   */

  printList() {
    var curr = this.head;
    var str = '';
    while (curr) {
      str += curr.data + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

// creating an object for the
// DoublyLinkedList class
var dll = new DoublyLinkedList();

dll.addFront(20);
dll.addFront(10);
dll.addFront(8);
dll.append(5);

dll.printList();
