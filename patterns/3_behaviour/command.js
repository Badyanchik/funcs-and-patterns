class MyMath {
  constructor (initVal = 0) {
    this.number = initVal;
  }

  square() {
    return this.number ** 2;
  }

  cube() {
    return this.number ** 3;
  }
}

class Command {
  constructor (subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(3));

console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.commandsExecuted);
