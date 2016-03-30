"use strict";

var _marked = [foo, bar].map(regeneratorRuntime.mark);

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
                    return _context.abrupt("return", 4);

                case 7:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

function bar() {
    var x;
    return regeneratorRuntime.wrap(function bar$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    return _context2.delegateYield(foo(), "t0", 1);

                case 1:
                    x = _context2.t0;

                    console.log("x:", x);
                    _context2.next = 5;
                    return x;

                case 5:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked[1], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = bar()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;

        console.log(v);
    }

    // 1 2 3
    // x: 4
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

//# sourceMappingURL=yield delegation 3-compiled.js.map