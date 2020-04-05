class Car {
  constructor (model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor () {
    this.cars = [];
  }

  create(model, price) {
    const candidate = this.getCar(model);
    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }

  getCar(model) {
    return this.cars.find(car => car.model === model);
  }
}

const carFactory = new CarFactory();

const ford = carFactory.create('Ford', 15000);
const audi = carFactory.create('Audi', 25000);
const audi2 = carFactory.create('Audi', 40000);
console.log(ford);
console.log(audi);
console.log(audi2);
