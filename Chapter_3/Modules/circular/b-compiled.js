"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = bar;

var _a = require("./a-compiled");

var _a2 = _interopRequireDefault(_a);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bar(y) {
    if (y > 5) {
        return (0, _a2.default)(y - 2);
    } else {
        return y * 3;
    }
} /**
   * Created by JCLG on 3/30/2016.
   */

//# sourceMappingURL=b-compiled.js.map