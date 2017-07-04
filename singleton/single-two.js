/**
 * Created by unnKoel on 2017/7/4.
 */
var Singleton = function (name) {
    this.name = name;
};

Singleton.prototype.getName = function () {
    alert(this.name);
};

Singleton.getInstance = (function () {
    var instance = null;
    return function (name) {
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();