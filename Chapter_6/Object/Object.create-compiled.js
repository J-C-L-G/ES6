'use strict';

/**
 * Created by JCLG on 4/4/2016.
 */

var o1 = {
    foo: function foo() {
        console.log('foo');
    }
};

var o2 = Object.assign(Object.create(o1), {
    bar: function bar() {
        console.log('bar');
    }
});

o2.foo();
o2.bar();

//# sourceMappingURL=Object.create-compiled.js.map