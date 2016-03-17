/**
 * Created by JCLG on 3/16/2016.
 */

'use strict';

/* Pre-ES6 Way */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var name = "Kyle";
var greeting = "Hello " + name + "!";

console.log(greeting);
console.log(typeof greeting === "undefined" ? "undefined" : _typeof(greeting));

/* ES6 way */
var name = "Kyle";
var greeting = "Hello " + name + "!";

console.log(greeting);
console.log(typeof greeting === "undefined" ? "undefined" : _typeof(greeting));

//# sourceMappingURL=interpolated_strings-compiled.js.map