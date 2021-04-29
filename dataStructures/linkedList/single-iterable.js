// linked-list example

const createLinkedList = () => {
    let element;

    return {
        push(data) {
            element = {
                prev: element,
                data,
            }
            return element;
        },

        last() {
            return element;
        },

        [Symbol.iterator]: () => ({
            current: element,
            next() {
                const el = this.current;
                if (!el) {
                    return {
                        done: true,
                        value: null,
                    }
                }

                this.current = el.prev;

                return {
                    done: false,
                    value: el.data,
                }
            }
        })
    }
}

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = createLinkedList();
list.push(obj1);
list.push(obj2);
list.push(obj3);

console.dir(list.last());
console.dir([...list]);

for (const el of list) {
    console.log('list item', el)
}
