/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

function bar(val) {
    console.log('bar called!');
    return y + val;
}

function foo() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? y + 3 : arguments[0];
    var z = arguments.length <= 1 || arguments[1] === undefined ? bar(x) : arguments[1];

    console.log(x, z);
}

var y = 5;
foo();
foo(10);

y = 6;
foo(undefined, 10);

//# sourceMappingURL=param_as_function-compiled.js.map