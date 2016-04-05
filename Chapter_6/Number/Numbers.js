/**
 * Created by JCLG on 4/4/2016.
 */

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

var a = NaN, b = "NaN", c = 42;
console.log(isNaN(a));  // true
console.log(isNaN(b));  // true--oops!
console.log(isNaN(c));  // false

console.log(Number.isNaN(a));  // true
console.log(Number.isNaN(b));  // false--fixed!
console.log(Number.isNaN(c));  // false
