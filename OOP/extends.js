/**
 * 方式一：构造函数实现继承
 * 原理：通过子类构造函数调用父类构造函数，将this指向给子类实例，来实现继承
 * 缺点：无法继承父类原型上的方法  
 */
function Father(name) {
    this.name = name;
}

function Children(name, type) {
    Father.call(this);
    this.type = 'type';

}

/**
 * 方式二：原型继承
 * 原理：通过让子类的原型指向父类的实例对象，从而实现继承父类
 * 缺点：如果父类有引用类型的实例，那么所有子类共用同一个对象，随便哪个改变了，其余的就全部都改变了
 */
function Father2() {
    this.name = "myname";
    this.friend = [1, 2, 3];
}

function Children2() {
    this.type = 'type';
}
Children2.prototype = new Father();

/**
 * 方式三：组合继承
 * 原理：通过构造函数和原型链
 * 优点：既能有构造函数的属性，又能有原型链的优点
 * 缺点：父类的构造函数被调用两次，子类的原型指向父类对象的时候，父类构造函数被调用一次，
 * 创建子类实例的时候，父类构造函数又被调用一次
 */
function Father3() {
    this.name = "myname";
    this.friend = [1, 2, 3];
}

function Children3() {
    Father3.call(this);
    this.type = "type3";
}
Children3.prototype = new Father3();

/**
 * 方式四：组合继承优化一
 * 原理：在组合继承的基础上，让子类的原型指向了父类的原型对象，防止父类构造函数被调用两次
 * 缺点：子类的构造函数指向父类对象，这样你就不能判断说实例是通过子类的构造函数创建的，还是通过父类的构造函数创建的
 * 这样子类新增属于子类的方法时，会导致父类新增同样的方法
 */
function Father4() {
    this.name = "father4";
    this.frend = [1, 2, 4];
}

function Children4() {
    Father4.call(this);
    this.type = "type4";
}
Children4.prototype = Father4.prototype;

/**
 * 方式五：组合继承优化二
 * 
 */
function Fater5() {
    this.name = "father5";
}

function Children5() {
    Fater5.call(this);
    this.type = "type5";
}
Children5.prototype = Object.create(Fater5.prototype);
Children5.prototype.constructor = Children5;