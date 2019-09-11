const { randomChar } = require('./common');

class Observable {
  constructor () {
    this.observers = [];
  }

  subscribe(observer) {
    observer.observable = this;
    this.observers.push(observer);
    return this;
  }

  notify(data) {
    if (this.observers.length) {
      for (const observer of this.observers) {
        observer.update(data)
      }
    }
  }

  complete() {
    throw new Error('Observer.complete is not implemented');
  }
}

class Observer {
  update() {
    throw new Error('Observer.update is not implemented');
  }
}

class CharStream extends Observable {
  constructor () {
    super();
    this.timer = setInterval(() => {
        const char = randomChar();
        this.notify(char);
    }, 200)
  }

  complete () {
    clearInterval(this.timer);
  }
}

class CharStreamObserver extends Observer {
  constructor () {
    super();
    this.count = 0;
    this.observable = null;
  }

  update (char) {
    process.stdout.write(char);
    this.count++;
    if (this.count > 50) {
      this.observable.complete();
      process.stdout.write('\n');
    }
  }
}

const observer = new CharStreamObserver();
const observable = new CharStream();
observable.subscribe(observer);
