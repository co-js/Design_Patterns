/**
 * Created by common on 2017/7/7.
 */
var Iterator = function (obj) {
  var current = 0;
  var next = function () {
    current += 1;
  };
  var isDone = function () {
    return current >= obj.length;
  };

  var getCurrItem = function () {
    return obj[current];
  };

  return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem
  }
};