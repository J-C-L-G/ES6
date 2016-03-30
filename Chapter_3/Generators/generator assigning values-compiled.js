'use strict';

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
    var x, y, z;
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    x = _context.sent;

                    console.log('x assigned');
                    _context.next = 6;
                    return 2;

                case 6:
                    y = _context.sent;

                    console.log('y assigned');
                    _context.next = 10;
                    return 3;

                case 10:
                    z = _context.sent;

                    console.log('z assigned');
                    console.log(x, y, z);

                case 13:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next(100));
console.log(iterator.next(200));
console.log(iterator.next(300));

//# sourceMappingURL=generator assigning values-compiled.js.map