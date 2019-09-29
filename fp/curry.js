const curry = fn => (...args) => {
  if (fn.length > args.length) {
    return curry(fn.bind(null, ...args));
  }
  return fn(...args);
}

const curry1 = fn => (...args) => (
  fn.length > args.length ? curry1(fn.bind(null, ...args)) : fn(...args)
)

const curry2 = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length ?
      curry(fn.bind(null, ...args)) :
      fn(...args)
  )
  return par.length ? curried(...par) : curried;
}
