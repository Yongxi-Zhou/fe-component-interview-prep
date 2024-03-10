function curry(fn) {
  return function curried(...arg) {
    if (fn.length === arg.length) {
      return fn.apply(this, arg);
    } else if (arg.length < fn.length) {
      return function (...arg2) {
        return curried.apply(this, arg.concat(arg2));
      };
    } else {
      throw new Error("params too much");
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
