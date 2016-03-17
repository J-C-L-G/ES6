"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by JCLG on 3/15/2016.
 */

function foo() {
    return [1, 2, 3];
}

function bar() {
    return { x: 4, y: 5, z: 6 };
}

var _foo = foo();

var _foo2 = _slicedToArray(_foo, 4);

var _foo2$ = _foo2[0];
var a = _foo2$ === undefined ? 3 : _foo2$;
var _foo2$2 = _foo2[1];
var b = _foo2$2 === undefined ? 6 : _foo2$2;
var _foo2$3 = _foo2[2];
var c = _foo2$3 === undefined ? 9 : _foo2$3;
var _foo2$4 = _foo2[3];
var d = _foo2$4 === undefined ? 12 : _foo2$4;

var _bar = bar();

var _bar$x = _bar.x;
var x = _bar$x === undefined ? 5 : _bar$x;
var _bar$y = _bar.y;
var y = _bar$y === undefined ? 10 : _bar$y;
var _bar$z = _bar.z;
var z = _bar$z === undefined ? 15 : _bar$z;
var _bar$w = _bar.w;
var w = _bar$w === undefined ? 20 : _bar$w;


console.log(a, b, c, d, x, y, z, w);

//# sourceMappingURL=Destructuring with Default Values-compiled.js.map