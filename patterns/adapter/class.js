class ArrayToQueueAdapter extends Array {
  enqueue(data) {
    this.push(data);
  }
  dequeue() {
    return this.pop();
  }
  get count() {
    return this.length;
  }
}

const queue = new ArrayToQueueAdapter();
queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');
while (queue.count) {
  console.log(queue.dequeue());
}
