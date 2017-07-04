/**
 * Created by common on 2017/7/4.
 */
var timeChunk = function (fn, interval, endCond) {
  var t;
  return function () {
    var self = this;
    t = setInterval(function () {
      if (endCond(fn.apply(self, arguments))) {
        return clearInterval(t);
      }
    }, interval || 500);
  }
};

var arrayTimeChunk = function (ary, fn, count) {
  var start = function () {
    for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
      var obj = ary.shift();
      fn(obj);
    }
  };
  return function () {
    timeChunk(function () {
      start();
      return ary.length;
    }, 200, function () {
      var aryLength = arguments[0];
      if (aryLength === 0) {
        return true;
      }
    })();
  }
};

var createDivTimeChunk = function () {
  var ary = [];

  for (var i = 1; i <= 1000; i++) {
    ary.push(i);
  }

  arrayTimeChunk(ary, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
  }, 8)();
};
createDivTimeChunk();