class HashTable {
    constructor(storageLimit = 20) {
        this.storage = [];
        this.__STORAGE_LIMIT = storageLimit;
    }

    hash(str, max = this.__STORAGE_LIMIT) {
        let hashNum = 0;

        for (let i = 0; i < str.length; i++) {
            hashNum += str.charCodeAt(i);
        }

        return hashNum % max;
    }

    print() {
        console.log(this.storage);
    }

    add(key, value) {
        const index = this.hash(key);

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    }

    remove(key) {
        const index = this.hash(key);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }

    lookup(key) {
        const index = this.hash(key);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i][0] === key) {
                return this.storage[index][i][1];
            }
        }
    }
}


const hashTable = new HashTable();
hashTable.add('Ivan', 'person');
hashTable.add('Barsik', 'dog');
hashTable.add('rex', 'mouse');
hashTable.add('tux', 'cat');
hashTable.add('Vasya', 'cat');
hashTable.add('Moisha', 'cat');

hashTable.remove('tux')

console.log(hashTable.lookup('Ivan'))
hashTable.print();
