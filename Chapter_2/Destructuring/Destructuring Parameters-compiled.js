"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/**
 * Created by JCLG on 3/15/2016.
 */

function f3() {
  var a = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
  var _ref = arguments[1];

  var _ref2 = _toArray(_ref);

  var x = _ref2[0];
  var y = _ref2[1];

  var z = _ref2.slice(2);

  for (var _len = arguments.length, w = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    w[_key - 2] = arguments[_key];
  }

  console.log(a, x, y, z, w);
}

f3(undefined, [1, 2, 3, 4, 5], 6, 7, 8, [9, 10]);

//# sourceMappingURL=Destructuring Parameters-compiled.js.map