class Dequeue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    push(item) {
        const { last } = this;
        const element = { prev: last, next: null, item };
        if (last) {
            last.next = element;
        } else {
            this.first = element;
        }
        this.last = element;
    }
    pop() {
        const element = this.last;
        if (!element) return null;
        if (this.first === element) {
            this.first = null;
            this.last = null;
        } else {
            this.last = element.prev;
        }
        return element.item;
    }
    unshift(item) {
        const { first } = this;
        const element = { prev: null, next: first, item };
        if (first) {
            first.prev = element;
        } else {
            this.last = element;
        }
        this.first = element;
    }
    shift() {
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


const dequeue = new Dequeue();

dequeue.push({ name: '1' });
dequeue.push({ name: '2' });
dequeue.unshift({ name: '3' });
dequeue.unshift({ name: '4' });

console.dir(dequeue, { depth: 6 });

console.log('--------- After pop and shift ---------');

dequeue.pop();
dequeue.shift();

console.dir(dequeue, { depth: 6 });
