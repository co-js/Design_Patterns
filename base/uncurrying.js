/**
 * Created by common on 2017/7/4.
 */

Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    console.log(obj);
    console.log(arguments);
    return self.apply(obj, arguments);
  }
};

// var call = Function.prototype.call.uncurrying();
//
// var fn = function (name) {
//   console.log(name);
// };
//
// call(fn, window, 'sven');

var push = Array.prototype.push.uncurrying();
var obj = {
  length: 1,
  '0': 1
};

push(obj, 2);
console.log(obj);

//另一种 uncurrying
Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    return Function.prototype.call.apply(self, arguments);
  }
};

