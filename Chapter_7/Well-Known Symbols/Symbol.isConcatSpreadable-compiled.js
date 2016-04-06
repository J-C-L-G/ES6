"use strict";

/**
 * Created by JCLG on 4/5/2016.
 */

var a = [1, 2, 3],
    b = [4, 5, 6];
b[Symbol.isConcatSpreadable] = false;
console.log([].concat(a, b));

//# sourceMappingURL=Symbol.isConcatSpreadable-compiled.js.map