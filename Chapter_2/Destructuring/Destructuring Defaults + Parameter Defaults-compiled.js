"use strict";

/**
 * Created by JCLG on 3/15/2016.
 */

function f6() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$x = _ref.x;
  var x = _ref$x === undefined ? 10 : _ref$x;

  var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? { y: 10 } : arguments[1];

  var y = _ref2.y;

  console.log(x, y);
}

f6(undefined); // 10 10
f6(undefined, undefined); // 10 10
f6({}, undefined); // 10 10
f6(); // 10 10
f6({}); // 10 10
f6({}, {}); // 10 undefined
f6({ x: 100 }, { y: 1000 }); // 100 1000

//# sourceMappingURL=Destructuring Defaults + Parameter Defaults-compiled.js.map