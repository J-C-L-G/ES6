"use strict";

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
  var array;
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.t0 = _context.sent;
          _context.next = 5;
          return 2;

        case 5:
          _context.t1 = _context.sent;
          _context.next = 8;
          return 3;

        case 8:
          _context.t2 = _context.sent;
          array = [_context.t0, _context.t1, _context.t2];
          _context.t3 = console;
          _context.t4 = array;
          _context.next = 14;
          return 4;

        case 14:
          _context.t5 = _context.sent;

          _context.t3.log.call(_context.t3, _context.t4, _context.t5);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var iterator = foo();
iterator.next();
iterator.next(10);
iterator.next(20);
iterator.next(30);
iterator.next(40);

//# sourceMappingURL=multiple yield-compiled.js.map