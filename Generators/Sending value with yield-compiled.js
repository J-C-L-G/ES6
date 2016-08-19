"use strict";

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/22/2016.
 */

function foo() {
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!true) {
                        _context.next = 5;
                        break;
                    }

                    _context.next = 3;
                    return Math.random();

                case 3:
                    _context.next = 0;
                    break;

                case 5:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = foo();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

//# sourceMappingURL=Sending value with yield-compiled.js.map