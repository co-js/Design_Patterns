/**
 * Created by common on 2017/7/4.
 */
var throttle = function (fn, interval) {
  var _self = fn,
    timer,
    fistTime = true;

  return function () {
    var args = arguments,
      _me = this;

    if (firstTime) {
      _self.apply(_me, args);
      return fistTime = false;
    }

    if (timer) {
      return false;
    }
    timer = setTimeout(function () {
      clearTimeout(timer);
      timer = null;
      _self.apply(_me, args);
    }, interval || 500)
  }
};