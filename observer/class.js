const { randomChar } = require('./common');

class Observable {
  constructor () {
    this.observer = null;
    setInterval(() => {
      if (this.observer) {
        const char = randomChar();
        this.observer(char);
      }
    }, 200)
  }

  subscribe(observer) {
    this.observer = observer;
    return this;
  }

  unSubscribe() {
    this.observer = null;
    console.log('\n unsubscribe \n')
    return this;
  }
}

let count = 0;

const observer = char => {
  process.stdout.write(char);
  count++;
  if (count > 50) {
    process.stdout.write('\n');
    process.exit(0)
  }
};

const observable = new Observable();
observable.subscribe(observer);

setTimeout(() => observable.unSubscribe(), 1500);
