/**
 * Created by common on 2017/7/7.
 */
var event = {
  clientList: [],
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = [];
    }
    this.clientList[key].push(fn);  //订阅的消息添加进缓存列表
  },

  trigger: function () {
    var key = Array.prototype.shift.call(arguments),
      fns = this.clientList[key];
    if (!fns || fns.length === 0) {
      return false;
    }

    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments);
    }
  }
};

var installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i];
  }
};
