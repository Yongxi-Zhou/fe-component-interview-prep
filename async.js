(async function () {
  //   const p = Promise.reject("err1");
  try {
    const res = await Promise.reject("err1");
    console.log(res, 111);
  } catch (err) {
    console.error(err, 222);
  }
})();
