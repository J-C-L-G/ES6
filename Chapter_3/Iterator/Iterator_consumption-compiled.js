"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Created by JCLG on 3/22/2016.
 */

var array = [1, 2, 3, 4, 5];

// The spread operator fully exhaust an iterator
function foo(x, y, z, w, p) {
    console.log(x + y + z + w + p);
}

foo.apply(undefined, array);

//Spread an iterator inside an array
var array_b = [0].concat(array, [6, 7]);
console.log(array_b);

/*With Array Destructuring*/

var iterator = array_b[Symbol.iterator]();

var _iterator = _slicedToArray(iterator, 2);

var x = _iterator[0];
var y = _iterator[1];

var _iterator2 = _toArray(iterator);

var z = _iterator2[0];

var w = _iterator2.slice(1);

console.log(iterator.next());
console.log(x, y);
console.log(z, w);

//# sourceMappingURL=Iterator_consumption-compiled.js.map