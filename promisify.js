function promisify(fn) {
  return function (...arg) {
    return new Promise((resolve, reject) => {
      console.log(arg);
      fn(...arg, (data, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}

const exampleFn = function (a, b, cb) {
  cb(a + b, "err-cb");
};
const promisified = promisify(exampleFn);
promisified(5, 15)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
