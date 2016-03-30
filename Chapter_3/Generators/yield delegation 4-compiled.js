"use strict";

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo(x) {
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!(x < 3)) {
                        _context.next = 4;
                        break;
                    }

                    return _context.delegateYield(foo(x + 1), "t0", 2);

                case 2:
                    x = _context.t0;

                    console.log(x);

                case 4:
                    return _context.abrupt("return", x * 2);

                case 5:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = foo(1);
console.log(iterator.next());

//# sourceMappingURL=yield delegation 4-compiled.js.map