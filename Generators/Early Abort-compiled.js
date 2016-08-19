'use strict';

var _marked = [foo].map(regeneratorRuntime.mark);

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
    return regeneratorRuntime.wrap(function foo$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iterator = foo();
console.log(iterator.next());
try {
    iterator.throw('Opps');
} catch (error) {
    console.log(error);
}
console.log(iterator.next());

//# sourceMappingURL=Early Abort-compiled.js.map