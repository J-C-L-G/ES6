"use strict";

var _it;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by JCLG on 3/22/2016.
 */

var it = (_it = {}, _defineProperty(_it, Symbol.iterator, function () {
    return this;
}), _defineProperty(_it, "next", function next() {
    return {
        value: this.values[this.tmp], done: this.tmp++ == this.values.length
    };
}), _defineProperty(_it, "values", [1, 2, 3, 4, 5]), _defineProperty(_it, "tmp", 0), _it);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

//# sourceMappingURL=MakingOne-compiled.js.map