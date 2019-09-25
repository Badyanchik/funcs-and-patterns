const singleton = (() => {
  const instance = {};
  return () => instance;
})()

console.assert(singleton() === singleton());
console.log('instances are equal', singleton())
