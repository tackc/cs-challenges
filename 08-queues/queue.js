class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(val) {
    this.data.unshift(val);
  }

  dequeue() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;