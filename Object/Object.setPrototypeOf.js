/**
 * Created by JCLG on 4/4/2016.
 */

var o1 = {
    foo(){console.log('foo')}
};

var o2 = {};

Object.setPrototypeOf(o2,o1);
console.log(o2.__proto__);
o2.foo();

var o3 = Object.setPrototypeOf({},o1);
o3.foo();