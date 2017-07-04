/**
 * Created by unnKoel on 2017/7/4.
 */
var loginLayer = (function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
})();

document.getElementsById('loginBtn').onclick = function () {
    loginLayer.style.display = 'block';
};


//惰性单例
var createLoginLayer = (function () {
    var div;
    return function () {
        if (!div) {
            div = document.createElement('div');
            div.innerHTML = '我是登录浮窗';
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        return div;
    }
})();

document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createLoginLayer();
    loginLayer.style.display = 'block';
};

//通用惰性单例
var getSingle = function (fn) {
    var result;
    return function () {
        return result || (result = fn.apply(this, arguments));
    }
};

var createLoginLayer2 = function () {
    var div = document.createElement('div');
    div.innerHTML = '我是登录浮窗';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
};

var createSingleLoginLayer = getSingle(createLoginLayer2);

document.getElementById('loginBtn').onclick = function () {
    var loginLayer = createSingleLoginLayer();
    loginLayer.style.display = 'block';
};