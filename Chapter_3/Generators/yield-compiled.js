'use strict';

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/22/2016.
 */

function foo() {
    var x, y, z;
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    x = 10, y = 20;

                    console.log(x, y);
                    _context.next = 4;
                    return;

                case 4:
                    z = x + y;

                    console.log(z);
                    _context.next = 8;
                    return;

                case 8:
                    console.log('end of the process');

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = foo();
iterator.next();
iterator.next();

//# sourceMappingURL=yield-compiled.js.map