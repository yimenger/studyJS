/**如果原型链上有x属性get方法，当前对象无法通过赋值的方法定义属于自己的x属性 */
function foo() {};
Object.defineProperty(foo.prototype, 'age', { get: function() { return 1; } })

var obj = new foo();
obj.age; //1
obj.age = 2; //2
obj.age; //1

/**如果原型链上的属性设置为不能配置和重写，当前对象无法通过赋值方法定义自己的同名属性 */
function foo() {};
Object.defineProperty(foo.prototype, 'c', { value: 2 }); //configurable和writeable默认为false

var obj = new foo();
obj.c; //2
obj.c = 3; //3
obj.c; //2

/**可以通过以下方法定义自己的同名属性 */
Object.defineProperty(obj, 'c', { value: 3, writable: true });
obj.c; //3