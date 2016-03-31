"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = foo;

var _b = require("./b-compiled");

var _b2 = _interopRequireDefault(_b);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function foo(x) {
    if (x > 10) {
        return (0, _b2.default)(x - 1);
    } else {
        return x * 2;
    }
} /**
   * Created by JCLG on 3/30/2016.
   */

//# sourceMappingURL=a-compiled.js.map