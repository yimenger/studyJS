//apply/call/bind都是为了改变函数内部this的指向
function fruit() {
    this.color = "red";

    this.logColor = function() {
        console.log(this.color);
    }

}

var apple = new fruit();
apple.logColor();

//使用apply、call修改this指向的对象，同时会立即执行函数
var banana = { color: "yellow" };
apple.logColor.apply(banana);

var orange = { color: "green" };
apple.logColor.apply(orange);

//但是两者传参不一样，call是顺序传参，apply是数组传参
var arr1 = [1, "a", { color: "happy" }];
var arr2 = [1, 2, 4, 6];

Array.prototype.push.call(arr1, arr2);
arr1.length; //4

Array.prototype.push.apply(arr1, arr2);
arr1.length; //8

//使用bind修改this指向的对象，不会立即执行函数，而是返回一个绑定函数
var banana = { color: "yellow" };
var func = apple.logColor.bind(banana);
func();
//使用bind并且立即执行的方法
apple.logColor.bind(banana)();

//bind仅限一次绑定，多次绑定会失效，这是因为第一次绑定是this已经替换成对应函数
function a() {
    console.log("a");
    if (typeof this === 'function') {
        this();
    }
}

function b() {
    console.log("b");
    if (typeof this === 'function') {
        this();
    }
}

function c() {
    console.log("c");
    if (typeof this === 'function') {
        this();
    }
}

var d = a.bind(b);
d(); //a b，此次调用后的绑定函数d的内容如下，因此再次绑定是，结果仍然是a b
/**
 * d = function(){
 *  console.log("a");
 *  if(typeof b === 'function'){
 *          b();
 *  }
 * }
 */
var e = d.bind(c);
e(); //a b