"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by JCLG on 4/2/2016.
 */

var MyCoolArray = function (_Array) {
    _inherits(MyCoolArray, _Array);

    function MyCoolArray() {
        _classCallCheck(this, MyCoolArray);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(MyCoolArray).apply(this, arguments));
    }

    _createClass(MyCoolArray, [{
        key: "sum",
        value: function sum() {
            return this.reduce(function (acc, curr) {
                return acc + curr;
            }, 0);
        }
    }]);

    return MyCoolArray;
}(Array);

var x = new MyCoolArray(3);
console.log(x);
console.log(x.sum());

var y = [3];
//y.sum();    //y is not a function

var z = MyCoolArray.of(3);
console.log(z.length);
console.log(z.sum());

//# sourceMappingURL=Array.of - subclassing-compiled.js.map