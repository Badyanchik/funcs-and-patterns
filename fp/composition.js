const compose = (...fns) => (...args) => (
  fns.reverse().reduce((args, fn) => [fn(...args)], args)
)

const composeLoop = (...fns) => (...args) => {
  if (fns.length === 0) return args[0];

  let res = fns[0](...args);
  for (let i = 1; i < fns.length; i++) {
    res = fns[i](res);
  }
  return res;
}

const composeRecursive = (...fns) => (...args) => {
  if (fns.length === 0) return args[0];
  const fn = fns.shift();
  const res = fn(...args);
  if (fns.length === 0) return res;
  return compose(...fns)(res);
}




// Async pipe

const reduceAsync = (items, performer, done, initVal) => {
  const nseted = initVal === undefined;
  let counter = nseted ? 1 : 0;
  let previous = nseted ? items[0] : initVal;
  let current = nseted ? items[1] : items[0];

  const response = (err, data) => {
    if (!err && counter !== items.length - 1) {
      counter++;
      previous = data;
      current = items[counter];
      performer(previous, current, response, counter, items);
    } else if (done) {
      done(err, data);
    }
  }
  performer(previous, current, response, counter, items);
};

const last = arr => arr[arr.length - 1];

const pipeAsync = (funcs, ...args) => (
  () => reduceAsync(
    args.slice(0, -1),
    (params, fn, done) => fn(...params, ...done),
    last(args),
    funcs
  )
);
