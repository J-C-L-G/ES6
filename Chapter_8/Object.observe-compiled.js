"use strict";

/**
 * Created by JCLG on 4/6/2016.
 */

var obj = { a: 1, b: 2 };
Object.observe(obj, function (changes) {
    console.log(changes);
}, ["add", "update", "delete"]);

obj.c = 3;
console.log('***');
obj.a = 42;
console.log('***');
delete obj.b;

//# sourceMappingURL=Object.observe-compiled.js.map