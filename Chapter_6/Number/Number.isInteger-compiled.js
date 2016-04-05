"use strict";

/**
 * Created by JCLG on 4/5/2016.
 */

//console.log(Number.isInteger(4));
//console.log(Number.isInteger(4.));
//console.log(Number.isInteger(4.0));
//console.log(Number.isInteger(4.0000));
//console.log(Number.isInteger(NaN));
//console.log(Number.isInteger(Infinity));

function isFloat(x) {
  return Number.isFinite(x) && !Number.isInteger(x);
}

console.log(isFloat(4.2)); // true
console.log(isFloat(4)); // false
console.log(isFloat(NaN)); // false
console.log(isFloat(Infinity)); // false

//# sourceMappingURL=Number.isInteger-compiled.js.map