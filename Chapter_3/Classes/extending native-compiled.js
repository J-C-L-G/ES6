'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by JCLG on 3/31/2016.
 */

var MyCoolArray = function (_Array) {
    _inherits(MyCoolArray, _Array);

    function MyCoolArray() {
        _classCallCheck(this, MyCoolArray);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MyCoolArray).apply(this, arguments));
    }

    _createClass(MyCoolArray, [{
        key: 'first',
        value: function first() {
            return this[0];
        }
    }, {
        key: 'last',
        value: function last() {
            return this[this.length - 1];
        }
    }]);

    return MyCoolArray;
}(Array);

var arr = new MyCoolArray(1, 2, 3);
console.log(arr.length);
console.log(arr.first());
console.log(arr.last());
console.log(arr);

var Oops = function (_Error) {
    _inherits(Oops, _Error);

    function Oops(reason) {
        _classCallCheck(this, Oops);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Oops).call(this));

        _this2.oops = reason;
        return _this2;
    }

    return Oops;
}(Error);

var ouch = new Oops('I messed up');
throw ouch;

//# sourceMappingURL=extending native-compiled.js.map