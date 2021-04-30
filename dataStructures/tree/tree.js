class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
class Tree {
    constructor() {
        this.root = null;
    }

    add(data, toNodeData) {
        const node = new Node(data);

        const parent = toNodeData ? this.findBFS(toNodeData) : null;

        if (parent) {
            parent.children.push(node);
        } else if (!this.root) {
            this.root = node;
        } else {
            throw new Error('Tried to store node at root then root already exists.')
        }

        return node.data;
    }

    findBFS(data) {
        let node = null;

        this.traverseBFS((n) => {
            if (n.data === data) {
                node = n;
            }
        })

        return node;
    }

    traverseBFS(cb) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();

            cb(node);

            for (const child of node.children) {
                queue.push(child);
            }
        }
    }
}

const tree = new Tree();

const node1 = tree.add({name: 'Node1'});
const node2 = tree.add({name: 'Node2'}, node1);
tree.add({name: 'Node3'}, node2);
tree.add({name: 'Node4'}, node2);

tree.traverseBFS(node => console.dir(node, { depth: 6 }));