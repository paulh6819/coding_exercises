class Node {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const node = new Node(value);
    this.stack.push(node);
    this.size++;
  }
}

const stack = new Stack();
console.log(stack);
stack.append("paul");
console.log(stack);
