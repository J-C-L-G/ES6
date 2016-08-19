"use strict";

var _marked = [foo, bar].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
    var one;
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    one = _context.sent;

                    console.log(one);
                    _context.next = 6;
                    return 2;

                case 6:
                    _context.next = 8;
                    return 3;

                case 8:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function bar() {
    return regeneratorRuntime.wrap(function bar$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    return _context2.delegateYield(foo(), "t0", 1);

                case 1:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

var iterator = bar();
console.log(iterator.next());
console.log(iterator.next(100));
console.log(iterator.next());
console.log(iterator.next());

//# sourceMappingURL=yield delegation 2-compiled.js.map