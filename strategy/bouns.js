/**
 * Created by common on 2017/7/5.
 */

//最初代码
var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return salary * 4;
  }
  if (performanceLevel === 'A') {
    return salary * 3;
  }
  if (performanceLevel === 'B') {
    return salary * 2;
  }
};
calculateBonus('B', 20000);
calculateBonus('S', 6000);


//分离奖金计算策略和奖金计算
var performanceS = function (salary) {
  return salary * 4;
};

var performanceA = function (salary) {
  return salary * 3;
};

var performanceB = function (salary) {
  return salary * 2;
};

var calculateBonus = function (performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return performanceS(salary);
  }
  if (performanceLevel === 'A') {
    return performanceA(salary);
  }
  if (performanceLevel === 'B') {
    return performanceB(salary);
  }
};
calculateBonus('A', 10000);

//基于类的完整实现
var performanceS = function () {
};
performanceS.prototype.calculate = function (salary) {
  return salary * 4;
};
var performanceA = function () {
};
performanceA.prototype.calculate = function (salary) {
  return salary * 3;
};
var performanceB = function () {

};
performanceB.prototype.calculate = function (salary) {
  return salary * 2;
};

var Bonus = function () {
  this.salary = null;   //原始工资
  this.strategy = null;  //绩效等级对应的策略对象
};

Bonus.prototype.setSalary = function (salary) {
  this.salary = salary;
};
Bonus.prototype.setStrategy = function (strategy) {
  this.strategy = strategy;
};
Bonus.prototype.getBonus = function () {
  return this.strategy.calculate(this.salary);
};

var bonus = new Bonus();
bonus.setSalary(10000);
bonus.setStrategy(new performanceS());
console.log(bonus.getBonus());

//基于对象的实现
var strategies = {
  'S': function (salary) {
    return salary * 4;
  },
  'A': function (salary) {
    return salary * 3;
  },
  'B': function (salary) {
    return salary * 2;
  }
};

var calculateBonus = function (level, salary) {
  return strategies[level](salary);
};

console.log(calculateBonus('S', 20000));

var S = function (salary) {
  return salary * 4;
};

var A = function (salary) {
  return salary * 3;
};

var B = function (salary) {
  return salary * 2;
};

var calculateBonus = function (fn, salary) {
  return fn.call(this, salary);
};

console.log(calculateBonus(S, 10000));