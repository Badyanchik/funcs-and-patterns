class ArrayToQueueAdapter {
  constructor (arr) {
    this.array = arr;
  }
  enqueue(data) {
    this.array.push(data);
  }
  dequeue() {
    return this.array.pop();
  }
  get count() {
    return this.array.length;
  }
}

const queue = new ArrayToQueueAdapter(['test1', 'test2', 'test3']);
queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');
while (queue.count) {
  console.log(queue.dequeue());
}
