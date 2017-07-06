/**
 * Created by Miss Esc on 2017/7/7.
 */

var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
})();

var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function (src) {
            myImage.setSrc('file:// /C:/Users/svenzeng/Desktop/loading.gif');
            img.src = src;
        }
    }
})();

proxyImage.setSrc('http:// imgcache.qq.com/music/photo/k/000GGDys0AONk.jpg');

/**
 为了说明代理的意义，下面我们引入一个面向对象设计的原则——单一职责原则。
 单一职责原则指的是，就一个类（通常也包括对象和函数等）而言，应该仅有一个引起它变
 化的原因。如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起它变化的原因可
 能会有多个。面向对象设计鼓励将行为分布到细粒度的对象之中，如果一个对象承担的职责过多，
 等于把这些职责耦合到了一起，这种耦合会导致脆弱和低内聚的设计。当变化发生时，设计可能
 会遭到意外的破坏。
 职责被定义为“引起变化的原因”。上段代码中的 MyImage 对象除了负责给 img 节点设置 src
 外，还要负责预加载图片。我们在处理其中一个职责时，有可能因为其强耦合性影响另外一个职
 责的实现。
 另外，在面向对象的程序设计中，大多数情况下，若违反其他任何原则，同时将违反开放—
 封闭原则。如果我们只是从网络上获取一些体积很小的图片，或者 5 年后的网速快到根本不再需
 要预加载，我们可能希望把预加载图片的这段代码从 MyImage 对象里删掉。这时候就不得不改动
 MyImage 对象了。
 */