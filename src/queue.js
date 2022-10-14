//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.start = null;
    this.end = null;
    this.length = 0
  }

  getUnderlyingList() {
    return this.start;
    // remove line with error and write your code here
  }

  enqueue(value) {
    let node = new ListNode(value);

    if (this.start) {
      this.end.next = node;
      this.end = node;
    } else {
      this.start = node;
      this.end = node;
    }

    this.length++;
    // remove line with error and write your code here
  }

  dequeue() {
    let current = this.start;
    this.start = this.start.next;
    return current.value;
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
