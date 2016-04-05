'use strict';

/**
 * Created by JCLG on 4/5/2016.
 */

var a = NaN,
    b = Infinity,
    c = 42,
    d = '42';

console.log(isFinite(a));
console.log(isFinite(b));
console.log(isFinite(c));
console.log(isFinite(d));

console.log(Number.isFinite(a));
console.log(Number.isFinite(b));
console.log(Number.isFinite(c));
console.log(Number.isFinite(d));

console.log(Number.isFinite(+d)); //Coerces the value before sent

//# sourceMappingURL=Number.isFinite-compiled.js.map