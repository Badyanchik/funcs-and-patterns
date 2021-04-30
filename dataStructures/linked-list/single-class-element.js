// element of a linked-list example

class Node {
    constructor(prev, data) {
        this.prev = prev;
        this.data = data;
    }
}

const n1 = new Node(null, { name: 'first' });
const n2 = new Node(n1, { name: 'second' });
const n3 = new Node(n2, { name: 'third' });

console.dir(n1)
console.dir(n2)
console.dir(n3)
