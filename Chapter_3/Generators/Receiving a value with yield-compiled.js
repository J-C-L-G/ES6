"use strict";

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
  var x;
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 10;

        case 2:
          x = _context.sent;

          console.log(x);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next(100));

//# sourceMappingURL=Receiving a value with yield-compiled.js.map