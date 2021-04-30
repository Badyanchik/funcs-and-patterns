class Stack {
    constructor() {
        this.last = null;
        this.length = 0;
        this.storage = {};
    }
    push(item) {
        this.length++;
        const prev = this.last;
        const element = { prev, item };

        this.storage[this.length] = item;
        this.last = element;
    }
    pop() {
        const element = this.last;
        if (!element) return null;

        delete this.storage[this.length];
        this.length--;
        this.last = element.prev;
        return element.item;
    }
    pip() {
        return this.storage;
    }
}

const stack = new Stack();

stack.push({ name: '1' });
stack.push({ name: '2' });
stack.push({ name: '3' });

console.dir(stack);
console.dir(stack.pip());
console.log('---------- After pop ----------')

stack.pop();
stack.pop();

console.dir(stack);
console.dir(stack.pip());
