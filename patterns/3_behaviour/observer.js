class Subject {
  constructor () {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  emit(changes) {
    this.observers.forEach(obs => {
      obs.update(changes);
    });
  }
}

class Observer {
  constructor (state = 1) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state;
        break;
      case 'DECREMENT':
        this.state = --this.state;
        break;
      case 'ADD':
        this.state += action.payload;
        break;
      default: this.state = this.initialState;
    }
  }
}

const stream = new Subject();
const obs1 = new Observer(1);
const obs2 = new Observer(31);

stream.subscribe(obs1);
stream.subscribe(obs2);

stream.emit({type: 'INCREMENT'});
stream.emit({type: 'INCREMENT'});
stream.emit({type: 'INCREMENT'});
stream.emit({type: 'DECREMENT'});
stream.emit({type: 'ADD', payload: 21});

console.log(obs1.state);
console.log(obs2.state);
