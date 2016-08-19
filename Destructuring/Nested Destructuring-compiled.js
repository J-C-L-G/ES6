"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by JCLG on 3/15/2016.
 */

var a1 = [1, [2, 3, 4], 5];
var o1 = { x: { y: { z: 6 } } };

var a = a1[0];

var _a1$ = _slicedToArray(a1[1], 3);

var b = _a1$[0];
var c = _a1$[1];
var d = _a1$[2];
var e = a1[2];
var w = o1.x.y.z;


console.log(a, b, c, d, e, w);

//# sourceMappingURL=Nested Destructuring-compiled.js.map