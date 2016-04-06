/**
 * Created by JCLG on 4/5/2016.
 */
'use strict';

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

arr[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
    var index;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    index = 0;

                case 1:
                    _context.next = 3;
                    return this[index];

                case 3:
                    if ((index += 2) < this.length) {
                        _context.next = 1;
                        break;
                    }

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
});

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _v = _step2.value;

        console.log(_v);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

//# sourceMappingURL=iterator-compiled.js.map