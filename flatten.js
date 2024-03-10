function flattern(arr) {
  let res = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      res = res.concat(flattern(val));
    } else {
      res.push(val);
    }
  }
  return res;
}
const test = [1, 2, [3, 4, [5, 6], 7, 8], 9];
console.log(flattern(test));
