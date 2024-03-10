class _Promise {
  static FULLFILL = "Finished";
  static REJECT = "Rejected";
  static PENDING = "Waiting";

  constructor(fn) {
    this.state = _Promise.FULFILL;
    this.result = null;
    this.resolveCallback = [];
    this.rejectCallback = [];
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (err) {
      this.reject(err.message);
    }
  }

  resolve(data) {
    setTimeout(() => {
      if (this.state === _Promise.PENDING) {
        this.state = _Promise.FULFILL;
        this.result = data;
        this.resolveCallback.forEach((callback) => {
          callback(data);
        });
      }
    });
  }

  reject(data) {
    setTimeout(() => {
      if (this.state === _Promise.PENDING) {
        this.state = _Promise.REJECT;
        this.result = data;
        this.rejectCallback.forEach((callback) => {
          callback(data);
        });
      }
    });
  }

  then(success, fail) {
    if (this.state === _Promise.PENDING) {
      this.resolveCallback.push(success);
      this.rejectCallback.push(fail);
    }
    if (this.state === _Promise.FULFILL) {
      setTimeout(() => {
        success(this.result);
      });
    } else if (this.state === _Promise.REJECT) {
      setTimeout(() => {
        fail(this.result);
      });
    }
  }
}
