// linked-list example

class LinkedList {
    constructor() {
        this.last = null;
    }

    push(data) {
        const element = {
            prev: this.last,
            data,
        };
        this.last = element;
        return element;
    }
}

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = new LinkedList();
list.push(obj1);
list.push(obj2);
list.push(obj3);

console.dir(list.last);
