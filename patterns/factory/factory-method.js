class Person {
  constructor (name) {
    this.name = name;
  }

  static factory(name) {
    return new Person(name)
  }
}

const p1 = new Person('Some');

const p2 = Person.factory('Markus');
