function promisify(fn) {
  return function (...arg) {
    return new Promise((resolve, reject) => {
      function cb(res) {
        resolve(res);
      }
      fn.apply(this, arg.concat(cb));
    });
  };
}

const exampleFn = function (a, b, cb) {
  cb(a + b);
};

const promisified = promisify(exampleFn);
promisified(5, 15).then((res) => console.log(res)); //20
