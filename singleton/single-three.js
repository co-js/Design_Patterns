/**
 * Created by unnKoel on 2017/7/4.
 */
//透明的单例，隐藏了构造函数
var CreateDiv = (function () {
    var instance;
    var CreateDiv = function (html) {
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };

    CreateDiv.prototype.init = function () {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    };

    return CreateDiv;
});