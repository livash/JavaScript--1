Function.prototype.myBind = function(obj) {
  var that = this;
  return function() {
    that.apply(obj)
  }
}

//now test myBind
function Animal(name) {
  this.name = name;
};
Animal.prototype.sayName = function() {
  console.log(this.name);
};

function sayNewName() {
  console.log(this.name);
}

var cat = new Animal("sam");
// x.someFunction().myBind(x)
cat.sayName();
console.log("whith bind");
sayNewName.myBind(cat)();