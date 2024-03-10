// const memo = (function () {
//   const cache = {};
//   function _cache(fn) {
//     return function () {
//       const key = JSON.stringify(arguments);
//       if (cache[key]) {
//         console.log("Cached value is used");
//         return cache[key];
//       } else {
//         cache[key] = fn.apply(this, arguments);
//         return cache[key];
//       }
//     };
//   }
//   return (fn) => _cache(fn);
// })();

// const fib = memo((n) => (n < 2 ? 1 : fib(n - 2) + fib(n - 1)));
// console.log(fib(100));
// console.log("Next call");
// console.log(fib(100));

const memo = function () {
  cache = {};
  return {
    get: function (x) {
      return cache[x];
    },
    set: function (x, val) {
      cache[x] = val;
    },
    containKey: function (key) {
      return key in cache;
    },
  };
};

let c = memo();
console.log(c.set(1, 10));
console.log(c.get(1));
console.log(c.containKey(1));

const fib_cache = memo();
function fib(n) {
  if (n < 2) {
    return 1;
  }
  if (fib_cache.containKey(n)) {
    console.log("Cached value is used");
    return fib_cache.get(n);
  } else {
    let res = fib(n - 1) + fib(n - 2);
    fib_cache.set(n, res);
    return res;
  }
}

console.log(fib(100));
console.log("Next call");
console.log(fib(100));
