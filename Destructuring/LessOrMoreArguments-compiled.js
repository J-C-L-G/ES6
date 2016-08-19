"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by JCLG on 3/15/2016.
 */

function foo() {
    return [1, 2, 3];
}

function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

var _foo = foo();

var _foo2 = _slicedToArray(_foo, 5);

var b = _foo2[1];
var r = _foo2[4];

var _bar = bar();

var x = _bar.x;
var y = _bar.y;
var t = _bar.t;


console.log(b, x, y, r, t);

var a1 = [1, 2, 3, 4, 5];
var t = a1[0];
var u = a1.slice(1);

console.log(u);

//# sourceMappingURL=LessOrMoreArguments-compiled.js.map