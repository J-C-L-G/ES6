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
                    _context.prev = 0;
                    _context.next = 3;
                    return 1;

                case 3:
                    _context.next = 8;
                    break;

                case 5:
                    _context.prev = 5;
                    _context.t0 = _context['catch'](0);

                    console.log('inside foo ' + _context.t0);

                case 8:
                    _context.next = 10;
                    return 2;

                case 10:
                    throw 'This is an error';

                case 11:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0, 5]]);
}

var iterator = foo();
console.log(iterator.next());
try {
    iterator.throw('Hello Error');
    console.log(iterator.next());
} catch (error) {
    console.log(error);
}
console.log(iterator.next());

//# sourceMappingURL=Error handling-compiled.js.map