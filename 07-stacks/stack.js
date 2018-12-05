
class Stack {
  constructor() {
    this.data = []
  }
  push(value) {
      // this.data[this.data.length - 1] = value;
      this.data.push(value);
  }
  pop() {
    if (this.length === 0) {
        return undefined;
    }
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;
