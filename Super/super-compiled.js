'use strict';

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

/**
 * Created by JCLG on 3/16/2016.
 */

var obj1 = {
    name: 'obj1',
    foo: function foo() {
        console.log('foo in obj1 - name:' + this.name);
    },

    test: function test() {
        console.log('test');
    }
};

var obj2 = _obj = {
    name: 'obj2',
    foo: function foo() {
        _get(Object.getPrototypeOf(_obj), 'foo', this).call(this);
        console.log('foo in obj2 - name:' + this.name);
        _get(Object.getPrototypeOf(_obj), 'foo', this).call(this);
    },
    bar: function bar() {
        console.log('bar in obj2');
    },
    test: function test() {
        _get(Object.getPrototypeOf(_obj), 'test', this).call(this);
    }
};

Object.setPrototypeOf(obj2, obj1);
obj2.foo();
obj2.bar();
obj2.test();

//# sourceMappingURL=super-compiled.js.map