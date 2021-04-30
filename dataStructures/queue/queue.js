class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    put(item) {
        const last = this.last;
        const element = { next: null, item };

        if (last) {
            last.next = element;
            this.last = element;
        } else {
            this.first = element;
            this.last = element;
        }
    }
    pick() {
        const element = this.first;
        if (!element) return null;

        if (this.last === element) {
            this.first = null;
            this.last = null;
        } else {
            this.first = element.next;
        }

        return element.item;
    }
}


const queue = new Queue();

queue.put({ name: '1' })
queue.put({ name: '2' })
queue.put({ name: '3' })

console.dir(queue, { depth: 4 });

console.log('------------ After pick ------------');

queue.pick();
console.dir(queue);
