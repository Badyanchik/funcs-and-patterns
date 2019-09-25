const ArrayToQueueAdapter = function () {
  Array.call(this);
};

ArrayToQueueAdapter.prototype.enqueue = function (data) {
  this.push(data);
}

ArrayToQueueAdapter.prototype.dequeue = function () {
  return this.pop();
}

Object.defineProperty(ArrayToQueueAdapter.prototype, 'count', {
  get () {
    return this.length;
  }
})

Object.setPrototypeOf(ArrayToQueueAdapter.prototype, Array.prototype);

const queue = new ArrayToQueueAdapter();
queue.enqueue('uno');
queue.enqueue('due');
queue.enqueue('tre');
while (queue.count) {
  console.log(queue.dequeue());
}
