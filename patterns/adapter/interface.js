class HashMap {
  constructor (fs, path) {
    this.fs = fs;
    this.path = path;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }
  set(key, value) {
    this.fs.writeFileSync(this.path + key, JSON.stringify(value), 'utf-8')
  }
  get(key) {
    return JSON.parse(this.fs.readFileSync(this.path + key, 'utf-8'))
  }
  has(key) {
    return this.fs.existsSync(this.path + key);
  }
  delete(key) {
    this.fs.unlinkSync(this.path + key);
  }
  get size() {
    return this.keys().length;
  }
  keys() {
    return this.fs.readdirSync(this.path);
  }
  clear() {
    this.keys().forEach(file => {
      this.delete(file);
    })
  }
}

const fs = require('fs');
const dict = new HashMap(fs, './data/');
dict.set('name', 'Bohdan');
dict.set('age', 19);
dict.set('city', 'Lutsk');
dict.set('test', 'test');
dict.delete('test')

console.dir({
  name: dict.get('name'),
  age: dict.get('age'),
  size: dict.size,
})
dict.clear()
