/**
 * Created by JCLG on 3/17/2016.
 */

/* Non Sticky Mode */

var re1 = /foo/,
    str = "++foo++";

console.log(re1.lastIndex); // 0
console.log(re1.test(str)); // true
console.log(re1.lastIndex); // 0 not updated

re1.lastIndex = 4;
console.log(re1.test(str)); // true ignored lastIndex
console.log(re1.lastIndex); // 4 not updated

/* Sticky Mode */

var re2 = /foo/y,
    str = "++foo++";

console.log(re2.lastIndex); // 0
console.log(re2.test(str)); // false - "foo" not found at 0
re2.lastIndex = 2;
console.log(re2.test(str));
console.log(re2.lastIndex); // 5
console.log(re2.test(str)); // false
console.log(re2.lastIndex); // 0 - reset after prev match failure