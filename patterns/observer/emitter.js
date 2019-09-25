const EventEmitter = require('event-emitter')
const { randomChar } = require('./common');

class CharStream {
  constructor (ee) {
    this.timer = setInterval(() => {
      const char = randomChar();
      ee.emit('char', char);
    }, 200)
  }
  complete() {
    clearInterval(this.timer)
  }
}

const ee = new EventEmitter();
const observable = new CharStream(ee);

let count = 0;

const observer = char => {
  process.stdout.write(char);
  count++;
  if (count > 50) {
    process.stdout.write('\n');
    process.exit(0)
  }
};

ee.on('char', observer);
