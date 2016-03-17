"use strict";

/**
 * Created by JCLG on 3/15/2016.
 */

function foo() {
    return [1, 2, 3];
}

var tmpA = foo(),
    a = tmpA[0],
    b = tmpA[1],
    c = tmpA[2];

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var tmpB = bar(),
    x = tmpB.x,
    y = tmpB.y,
    z = tmpB.z;

//# sourceMappingURL=destructuring manually-compiled.js.map