class Complains {
  constructor () {
    this.complains = [];
  }

  reply(complaint) {

  }

  add(complaint) {
    this.complains.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplains extends Complains {
  reply ({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplains extends Complains {
  reply ({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now();
    const complaint = type === 'service' ? new ServiceComplains() : new ProductComplains();
    return complaint.add({ id, customer, details });
  }
}

const registry = new ComplaintRegistry();

console.log(registry.register('Bohdan', 'service', 'unavailable'));
console.log(registry.register('Alex', 'product', 'unexpected error'));
