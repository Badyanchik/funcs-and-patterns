function Singleton () {
  const { instance } = Singleton;
  if (instance) return instance;
  Singleton.instance = this;
}

console.assert(new Singleton() === new Singleton());
console.log('instances are equal')
