/**
 * Created by common on 2017/7/5.
 */
var tween = {
  linear: function (t, b, c, d) {
    return c * t / d + b;
  },

  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },

  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },

  strongEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },

  sineaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }
};

var Animate = function (dom) {
  var dom = dom, startTime, startPos, endPos, propertyName, easing, duration;

  function update(pos) {
    dom.style[propertyName] = pos + 'px';
  }

  function step() {
    var t = +new Date;   //取得当前时间
    if (t >= startTime + duration) {
      update(endPos);
      return false;
    }
    var pos = easing(t - startTime, startPos, endPos - startPos, duration);
    //pos为小球当前位置
    update(pos);
  }

  return {
    start: function (propertyName1, endPos1, duration1, easing1) {
      startTime = +new Date;  //动画启动时间
      startPos = dom.getBoundingClientRect()[propertyName1]; //dom节点初始位置
      propertyName = propertyName1; //dom节点需要被改变的CSS属性名
      endPos = endPos1;  //dom节点目标位置
      duration = duration1;  //动画持续事件
      easing = tween[easing1];  //缓动算法

      var timeId = setInterval(function () {  //启动定时器，开始执行动画
        if (step() === false) {
          clearInterval(timeId);
        }
      }, 19)
    }
  }
};

/**
 var Animate = function (dom) {
  this.dom = dom;
  this.startTime = 0;
  this.startPos = 0;
  this.endPos = 0;
  this.propertyName = null;
  this.easing = null;
  this.duration = null;
};

 Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date;  //动画启动时间
  this.startPos = this.dom.getBoundingClientRect()[propertyName]; //dom节点初始位置
  this.propertyName = propertyName; //dom节点需要被改变的CSS属性名
  this.endPos = endPos;  //dom节点目标位置
  this.duration = duration;  //动画持续事件
  this.easing = tween[easing];  //缓动算法

  var self = this;
  var timeId = setInterval(function () {  //启动定时器，开始执行动画
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19)
};

 Animate.prototype.step = function () {
  var t = +new Date;   //取得当前时间
  if (t >= this.startTime + this.duration) {
    this.update(this.endPos);
    return false;
  }
  var pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
  //pos为小球当前位置
  this.update(pos);
};

 Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + 'px';
};
 */