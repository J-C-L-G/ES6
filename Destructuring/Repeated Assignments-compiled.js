"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by JCLG on 3/15/2016.
 */

var _a = { a: 1 };
var X = _a.a;
var Y = _a.a;

console.log(X, Y);

var _a2 = { a: { x: 1 } };
var _a2$a = _a2.a;
var X = _a2$a.x;
var Y = _a2$a.x;
var a = _a2.a;

console.log(X, Y, a);

var _a3 = { a: [1, 2] };
var X = _a3.a;
var Y = _a3.a;

var _a3$a = _slicedToArray(_a3.a, 2);

var A = _a3$a[0];
var Z = _a3$a[1];

X.push(2);
Y[0] = 10;
console.log(X, Y, Z, A);

//# sourceMappingURL=Repeated Assignments-compiled.js.map