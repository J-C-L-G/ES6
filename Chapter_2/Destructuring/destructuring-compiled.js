/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function foo() {
    return [1, 2, 3];
}

var _foo = foo();

var _foo2 = _slicedToArray(_foo, 4);

var a = _foo2[0];
var b = _foo2[1];
var c = _foo2[2];
var d = _foo2[3];

console.log(a, b, c);

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var _bar = bar();

var xl = _bar.x;
var yl = _bar.y;
var zl = _bar.z;

console.log(xl, yl, zl);

/*Shorten Syntax*/

var _bar2 = bar();

var x = _bar2.x;
var y = _bar2.y;
var z = _bar2.z;

console.log(x, y, z);

/*Long Syntax*/

var _bar3 = bar();

var localX = _bar3.x;
var localY = _bar3.y;
var localZ = _bar3.z;

console.log(localX, localY, localZ);

//# sourceMappingURL=destructuring-compiled.js.map