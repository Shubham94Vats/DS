class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.last = null;
  }

  addToEmpty(last, data) {
    // This function is only for empty list
    if (last != null) return last;

    // Creating a node dynamically.
    var temp = new Node(data);

    // Assigning the data.
    // Note : list was empty. We link single node
    // to itself.
    this.last = temp;
    temp.next = this.last;

    return last;
  }

  /*
   * Add item at the front of CLL
   */

  addFront(data) {
    /* 1 & 2: Allocate the Node & Put in the data */
    let last = this.last;
    if (last == null) return this.addToEmpty(last, data);

    // Creating a node dynamically.
    var temp = new Node(data);

    // Adjusting the links.
    temp.next = last.next;
    last.next = temp;
    return last;
  }

  /*
   * Add item at the end of LL
   */

  append(data) {
    /* 1 & 2: Allocate the Node & Put in the data */
    const newNode = new Node(data);

    /* Check list empty then assign it to the head */
    if (this.head == null) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    /* 3. Traverse the whole list */
    let last = this.head;
    while (last.next != null) {
      last = last.next;
    }
    /* 4. Move the head to point to new Node */
    last.next = newNode;
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
    var p;
    let last = this.last;
    // If list is empty, return.
    if (last == null) {
      console.log('List is empty.<br>');
      return;
    }

    // Pointing to first Node of the list.
    p = last.next;
    console.log(p);

    // Traversing the list.
    do {
      console.log(p.data + ' ');
      p = p.next;
    } while (p != last.next);
  }
}

// creating an object for the
// CircularLinkedList class
var cll = new CircularLinkedList();

cll.addFront(20);
cll.addFront(10);
cll.addFront(8);
cll.addFront(5);

cll.printList();
