/**
 *
 * @param {Function} Child
 * @param {*} Parent
 */
function _extend(Child, Parent) {
  // Child.prototype.__proto__ = Parent.prototype
  Child.prototype = Object.create(Parent.prototype);

  // add super function
  Child.prototype._super = Parent;

  // Child.prototype.constructor = Child
  Object.defineProperty(Child.prototype, "constructor", {
    value: Child,
    enumerable: false,
    writerable: true,
  });
  return Child;
}

function ParentClass() {
  this.score = 0;
}
ParentClass.prototype.increment = function () {
  return ++this.score;
};
ParentClass.prototype.decrement = function () {
  return --this.score;
};

const ChildClass = _extend(function ChildClass() {
  this._super();
  this.name = "Bison";
  this.age = 26;
}, ParentClass);

ChildClass.prototype.toString = function () {
  return `${this.name} ${this.age} ${this.score}`;
};

const ch = new ChildClass();

ch.increment();
console.log(ch.toString());
console.log(ch instanceof ParentClass);
console.log(ch instanceof ChildClass);
