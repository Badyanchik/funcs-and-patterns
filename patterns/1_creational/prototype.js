const digitalBookPrototype = {
  format: 'pdf',

  getInfo() {
    console.log(`Book name is ${this.name}, format: ${this.format}`);
  }
}

const digitalBook = Object.create(digitalBookPrototype, {
  name: {
    value: 'Some book'
  }
});

console.log(digitalBook.getInfo());
