"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _o, _o2, _o3;

/**
 * Created by JCLG on 3/15/2016.
 */

/* Object Destructuring */
var o = { a: 1, b: 2, c: 3 },
    a,
    b,
    c,
    d,
    p;

p = (_o = o, a = _o.a, b = _o.b, c = _o.c, _o);
console.log(p);

/* Array Destructuring */
var o = [1, 2, 3],
    a,
    b,
    c,
    p;
p = (_o2 = o, _o3 = _slicedToArray(_o2, 3), a = _o3[0], b = _o3[1], c = _o3[2], _o2);
console.log(p);

//# sourceMappingURL=Destructuring Assignment Expresisons-compiled.js.map