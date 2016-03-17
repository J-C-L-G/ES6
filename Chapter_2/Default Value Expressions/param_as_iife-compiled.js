"use strict";

/**
 * Created by JCLG on 3/15/2016.
 */

function foo() {
    var x = arguments.length <= 0 || arguments[0] === undefined ? function (v) {
        return v + 11;
    }(31) : arguments[0];

    console.log(x);
}

foo();

function ajax(url) {
    //...

    var cb = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
}

function ajax(url) {
    //...

    var cb = arguments.length <= 1 || arguments[1] === undefined ? Function.prototype : arguments[1];
}

//# sourceMappingURL=param_as_iife-compiled.js.map