class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  /*
   * Add item at the front of LL
   */

  addFront(data) {
    /* 1 & 2: Allocate the Node & Put in the data */
    const newNode = new Node(data);
    /* 3. Make next of new Node as head */
    newNode.next = this.head;
    /* 4. Move the head to point to new Node */
    this.head = newNode;
  }

  /*
   * Add item at the end of LL
   */

  append(data) {
    /* 1 & 2: Allocate the Node & Put in the data */
    const newNode = new Node(data);

    /* Check list empty then assign it to the head */
    if (!this.head) {
      this.head = newNode;
      return true;
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
    var curr = this.head;
    console.log(curr)
    var str = '';
    while (curr) {
      str += curr.data + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

// creating an object for the
// SinglyLinkedList class
var ll = new SinglyLinkedList();

ll.addFront(20);
ll.append(30);
ll.append(40);
// ll.addFront(50);
// ll.append(1640);

// ll.printList();
// ll.deleteFront();
// ll.printList();
// ll.deleteEnd();
// ll.deleteEnd();

ll.printList();
