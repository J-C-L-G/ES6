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
                    _context.next = 5;
                    return 2;

                case 5:
                    _context.next = 7;
                    return 3;

                case 7:
                    _context.prev = 7;

                    console.log('cleanup!');
                    return _context.finish(7);

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[0,, 7, 10]]);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = foo()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;

        console.log(v);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

console.log('**************');
var it = foo();
console.log(it.next());
console.log(it.return(42));

//# sourceMappingURL=Early Completion + CleanUp-compiled.js.map