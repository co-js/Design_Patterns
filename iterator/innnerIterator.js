/**
 * Created by common on 2017/7/7.
 */
var each = function (ary, callback) {
  for (var i = 0, l = ary.length; i < l; i++) {
    callback.call(ary[i], i, ary[i]);
  }
};