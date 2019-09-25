const { EventEmitter } = require('events');

class AdapterEmitter extends EventEmitter {
  constructor () {
    super();
    this.transformations = {};
  }
  transform(from, to, fn) {
    this.transformations[from] = {to, fn};
  }
  emit(name, ...args) {
    const transform = this.transformations[name];
    if (transform) {
      super.emit(transform.to, ...transform.fn(...args));
    }
    super.emit(name, ...args);
  }
}

const ae = new AdapterEmitter();
ae.transform('timer', 'timeout', date => [date.toLocaleString()]);

ae.on('timeout', date => {
  console.log(date);
});

setTimeout(() => {
  const date = new Date();
  console.log('date is: ', date);
  ae.emit('timer', date);
}, 1000);
