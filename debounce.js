function debounce(fn, ms) {
  let timer = null;
  return function (...arg) {
    let context = this;
    // let arg = arguments;

    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, arg);
      timer = null;
    }, ms);
  };
}

function throttle(fn, ms) {
  let timer = null;

  return function (...arg) {
    let context = this;
    // let arg = arguments;

    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(context, arg);
      timer = null;
    }, ms);
  };
}

function getAction(e) {
  console.log(e.pageX, e.pageY);
}
document
  .querySelector(".node")
  .addEventListener("mousemove", debounce(getAction, 200));

// document
//   .querySelector(".node")
//   .addEventListener("mousemove", throttle(getAction, 500));
