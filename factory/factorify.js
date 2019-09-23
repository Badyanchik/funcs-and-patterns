class Person {
  constructor (name) {
    this.name = name;
  }
}

const factorify = Category => (...args) => new Category(...args);

const p1 = new Person('Some');

const personFactorify = factorify(Person);
const p2 = personFactorify('Marcus');
