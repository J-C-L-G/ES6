"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by JCLG on 4/5/2016.
 */

var Cool = function () {
    function Cool() {
        _classCallCheck(this, Cool);
    }

    _createClass(Cool, [{
        key: "again",
        value: function again() {
            return new this.constructor[Symbol.species]();
        }
    }], [{
        key: Symbol.species,

        // defer `@@species` to derived constructor
        get: function get() {
            return this;
        }
    }]);

    return Cool;
}();

var Fun = function (_Cool) {
    _inherits(Fun, _Cool);

    function Fun() {
        _classCallCheck(this, Fun);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Fun).apply(this, arguments));
    }

    return Fun;
}(Cool);

var Awesome = function (_Cool2) {
    _inherits(Awesome, _Cool2);

    function Awesome() {
        _classCallCheck(this, Awesome);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Awesome).apply(this, arguments));
    }

    _createClass(Awesome, null, [{
        key: Symbol.species,

        // force `@@species` to be parent constructor
        get: function get() {
            return Cool;
        }
    }]);

    return Awesome;
}(Cool);

var a = new Fun(),
    b = new Awesome(),
    c = a.again(),
    d = b.again();

c instanceof Fun; // true
d instanceof Awesome; // false
d instanceof Cool; // true

//# sourceMappingURL=Symbol.species-compiled.js.map