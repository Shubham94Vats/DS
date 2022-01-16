class Queue {
  constructor(size) {
    this.front = this.rear = 0;
    this.capacity = size;
    this.queue = new Array(this.capacity);
  }

  /*
   *  Adding element to the queue
   */
  enqueue(item) {
    // Check queue is full or not
    if (this.capacity == this.rear) {
      console.log('<br>Queue is full<br>');
      return;
    }

    // insert element at the rear
    else {
      this.queue[this.rear] = item;
      this.rear++;
    }
    return;
  }

  /*
   * Dequeue function
   * Method to remove an item from queue.
   * It changes front and size
   */
  dequeue() {
    // Check queue is empty or not
    if (this.rear == 0) {
      console.log('<br>Queue is empty<br>');
      return;
    }

    console.log(this.queue[this.front] + ' dequeued from queue\n');
    this.queue[this.front] = null;
    this.front++;
    return;
  }

  // Print front of queue
  queueFront() {
    if (this.front == this.rear) {
      console.log('<br>Queue is Empty<br>');
      return;
    }
    console.log('<br>Front Element is: ' + this.queue[this.front]);
    return;
  }

  /* Method to get rear of queue */
  rear() {
    if (isEmpty(this)) return Integer.MIN_VALUE;

    return this.queue[this.rear];
  }

  // Print queue elements
  queueDisplay() {
    let i;
    if (this.front == this.rear) {
      console.log('<br>Queue is Empty<br>');
      return;
    }

    // Traverse front to rear and print elements
    for (i = this.front; i < this.rear; i++) {
      console.log(this.queue[i] + '  <-- ');
    }
    return;
  }
}

var queue = new Queue(10);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
console.log("************  Print Queue elements ************")
queue.queueDisplay();
queue.dequeue();
queue.queueDisplay();
queue.enqueue(110);
queue.enqueue(120);
 