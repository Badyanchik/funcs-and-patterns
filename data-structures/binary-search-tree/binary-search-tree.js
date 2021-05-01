class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    __searchTree(data, node) {
        if (data < node.data) {
            if (node.left === null) {
                node.left = new Node(data);
                return;
            }
            return this.__searchTree(data, node.left);
        }

        if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data);
                return;
            }
            return this.__searchTree(data, node.right);
        }

        return null;
    }

    __removeNode(node, data) {
        if (node === null) return null;

        if (data === node.data) {
            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            let tempNode = node.right;
            while (tempNode.left !== null) {
                tempNode = tempNode.left;
            }
            node.data = tempNode.data;
            node.right = this.__removeNode(node.right, tempNode.data);
            return node;
        }

        if (data < node.data) {
            node.left = this.__removeNode(node.left, data);
            return node;
        }

        node.right = this.__removeNode(node.right, data);
        return node;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        }

        return this.__searchTree(data, node);
    }
    remove(data) {
        this.root = this.__removeNode(this.root, data);
    }
    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            current = data < current.data ? current.left : current.right;

            if (current === null) {
                return null;
            }
        }

        return current;
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            }

            current = data < current.data ? current.left : current.right;
        }

        return false;
    }
}

const bst = new BinarySearchTree();

bst.add(34);
bst.add(22);
bst.add(15);
bst.add(2);
bst.add(56);
bst.add(45);
bst.add(57);
bst.add(27);
bst.add(29);
bst.add(11);

bst.remove(34);

console.log(bst.findMin())
console.log(bst.findMax())
console.dir(bst.find(45), { depth: 10 })
console.log(bst.isPresent(15))
