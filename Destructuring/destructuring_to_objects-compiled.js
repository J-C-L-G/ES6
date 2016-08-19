'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by JCLG on 3/15/2016.
 */

function foo() {
    return [1, 2, 3];
}

function bar() {
    return {
        r: 'special',
        x: 4,
        y: 5,
        z: 6
    };
}

var o = {},
    dynamic = 'r';

var _foo = foo();

var _foo2 = _slicedToArray(_foo, 3);

o.a = _foo2[0];
o.b = _foo2[1];
o.c = _foo2[2];

var _bar = bar();

o.x = _bar.x;
o.y = _bar.y;
o.z = _bar.z;

var _bar2 = bar();

o[dynamic] = _bar2[dynamic];

console.log(o);

//# sourceMappingURL=destructuring_to_objects-compiled.js.map