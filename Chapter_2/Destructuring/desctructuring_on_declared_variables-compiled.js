/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

/*
 To work in Node,
 declare the variables in the same line:
 var [a,b,c] = foo();
 */
var a, b, c, d, e, f;

var _foo = foo();

var _foo2 = _slicedToArray(_foo, 3);

a = _foo2[0];
b = _foo2[1];
c = _foo2[2];

var _bar = bar();

d = _bar.x;
e = _bar.y;
f = _bar.z;

console.log(a, b, c, d, e, f);

//# sourceMappingURL=desctructuring_on_declared_variables-compiled.js.map