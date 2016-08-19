"use strict";

/**
 * Created by JCLG on 4/6/2016.
 */

var handlers = {
    get: function get() {
        throw "No such property/method!";
    },
    set: function set() {
        throw "No such property/method!";
    }
},
    pobj = new Proxy({}, handlers),
    obj = {
    a: 1,
    foo: function foo() {
        console.log("a:", this.a);
    }
};
// set up `obj` to fall back to `pobj`
Object.setPrototypeOf(obj, pobj);

obj.a = 3;
obj.foo(); // a: 3
obj.b = 4; // Error: No such property/method!
obj.bar(); // Error: No such property/method!

//# sourceMappingURL=No Such Property or Method - ProxyLast-compiled.js.map