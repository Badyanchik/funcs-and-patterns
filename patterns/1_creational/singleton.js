class Database {
  constructor (data) {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const firstDB = new Database('FirstDB');

const secondDB = new Database('SecondDB');

console.log(firstDB === secondDB);
