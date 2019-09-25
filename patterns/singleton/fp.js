const singleton = (instance => () => instance)({name: 'test'});

console.assert(singleton() === singleton());
console.log('instances are equal', singleton())
