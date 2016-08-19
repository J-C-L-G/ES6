"use strict";

/**
 * Created by JCLG on 3/16/2016.
 */

var f1 = function f1() {
    return 12;
};

var f2 = function f2(x) {
    return x * 2;
};

var f3 = function f3(x, y) {
    var z = x * 2 + y;
    y++;
    x *= 3;
    return (x + y + z) / 2;
};

console.log(f1());

//# sourceMappingURL=Declaration-compiled.js.map