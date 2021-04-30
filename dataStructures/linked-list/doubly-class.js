class Node {
    constructor(list, data) {
        this.list = list;
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(this, data);
        node.prev = this.last;

        if (!this.length) {
            this.first = node;
        } else {
            this.last.next = node;
        }

        this.last = node;
        this.length++;

        return node;
    }

    pop() {
        if (!this.length) return null;

        const node = this.last;
        this.last = node.prev;

        node.list = null;
        node.prev = null;
        node.next = null;

        this.length--;

        return node.data;
    }
}

const list = new LinkedList();

list.push({ name: 'first' });
list.push({ name: 'second' });
list.push({ name: 'third' });

console.dir(list.first);
console.dir(list.last);
console.dir(list.length);

list.pop()

console.log('----- After pop -----')

console.dir(list.first);
console.dir(list.last);
console.dir(list.length);
