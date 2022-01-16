class CircularQueue {
  constructor(size) {
    this.front = this.rear = -1;
    this.capacity = size;
    this.queue = new Array(this.capacity);
  }

  /*
   *  Adding element to the queue
   */
  enqueue(item) {
    // Condition if queue is full.
    if ((this.front == 0 && this.rear == this.capacity - 1) || this.rear == (this.front - 1) % (this.capacity - 1)) {
      console.log('<br>Queue is full<br>');
    }
    // condition for empty queue.
    else if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
      this.queue[this.rear] = item;
    } else if (this.rear == this.capacity - 1 && this.front != 0) {
      this.rear = 0;
      this.queue[this.rear] = item;
    } else {
      this.rear = this.rear + 1;

      // Adding a new element if
      if (this.front <= this.rear) {
        this.queue[this.rear] = item;
      }

      // Else updating old value
      else {
        this.queue[this.rear] = item;
      }
    }
  }

  /*
   * Dequeue function
   * Method to remove an item from queue.
   * It changes front and size
   */
  dequeue() {
    let temp;

    // Condition for empty queue.
    if (this.front == -1) {
      console.log('Queue is Empty');

      // Return -1 in case of empty queue
      return -1;
    }

    temp = this.queue[this.front];

    // Condition for only one element
    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front == this.capacity - 1) {
      this.front = 0;
    } else {
      this.front = this.front + 1;
    }

    console.log('<br>dequeue Element is: ' + temp);
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
  // Method to display the elements of queue
  queueDisplay() {
    // Condition for empty queue.
    if (this.front == -1) {
      console.log('Queue is Empty');
      return;
    }

    // If rear has not crossed the max size
    // or queue rear is still greater then
    // front.
    console.log('Elements in the ' + 'circular queue are: ');

    if (this.rear >= this.front) {
      // Loop to print elements from
      // front to rear.
      for (let i = this.front; i <= this.rear; i++) {
        console.log(this.queue[i]);
        console.log('');
      }
    }

    // If rear crossed the max index and
    // indexing has started in loop
    else {
      // Loop for printing elements from
      // front to max size or last index
      for (let i = this.front; i < this.capacity; i++) {
        console.log(this.queue[i]);
        console.log(' ');
      }

      // Loop for printing elements from
      // 0th index till rear position
      for (let i = 0; i <= this.capacity; i++) {
        console.log(this.queue[i]);
        console.log(' ');
      }
    }
  }
  // Print queue elements
  // Method to display the elements of queue
  queueDisplay() {
    // Loop for printing elements from
    // 0th index till rear position
    for (let i = 0; i < this.capacity; i++) {
      console.log(this.queue[i]);
      console.log(' ');
    }
  }
}

var circularQueue = new CircularQueue(4);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
console.log('************  Print Queue elements ************');
circularQueue.queueDisplay();
circularQueue.dequeue();
circularQueue.dequeue();
console.log('************  Print again Queue elements ************');
circularQueue.queueDisplay();
circularQueue.enqueue(50);
circularQueue.enqueue(60);
console.log('************  Print again and again Queue elements ************');
circularQueue.queueDisplay();
