"use strict";

/**
 * Created by JCLG on 3/15/2016.
 */

/*Object to Object*/
var o1 = { a: 1, b: 2, c: 3 },
    o2 = {};

o2.x = o1.a;
o2.y = o1.b;
o2.z = o1.c;

console.log(o2);

/*Object to Array*/
var o1 = { a: 1, b: 2, c: 3 },
    a1 = [];

a1[0] = o1.a;
a1[1] = o1.b;
a1[2] = o1.c;

console.log(a1);

/*Array to Object*/
var o1 = {},
    a1 = [1, 2, 3];

o1.a = a1[0];
o1.b = a1[1];
o1.c = a1[2];

console.log(o1);

/*Array to Array*/
var a1 = [1, 2, 3],
    a2 = [];
a2[2] = a1[0];
a2[1] = a1[1];
a2[0] = a1[2];

console.log(a2);

/*Swap Two Variables*/
var x = 10,
    y = 20;
var _ref = [x, y];
y = _ref[0];
x = _ref[1];

console.log(x, y);

//# sourceMappingURL=Mappings-compiled.js.map