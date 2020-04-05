class Employee {
  constructor (name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} is ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} has ${this.salary} salary`;
  }
}

class Developer extends Employee {
  constructor (name, salary) {
    super(name, salary);
  }

  responsibilities () {
    return 'coding';
  }
}

class QA extends Employee {
  constructor (name, salary) {
    super(name, salary);
  }

  responsibilities () {
    return 'testing';
  }
}

const dev = new Developer('Developer', 87000);
const qa = new QA('QA', 87500);
console.log(dev.work());
console.log(dev.getPaid());
console.log(qa.work());
console.log(qa.getPaid());
