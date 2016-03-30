"use strict";

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield([1, 2, 3], "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//# sourceMappingURL=yield delegation 1-compiled.js.map