const Singleton = (() => {
  let instance;

  function Singleton () {
    if (instance) return instance;
    instance = this;
  }

  return Singleton;
})();

console.assert(new Singleton() === new Singleton());
console.log('instances are equal')
