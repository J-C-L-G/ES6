"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by JCLG on 3/31/2016.
 */

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
        key: "spawn",
        value: function spawn() {
            return new this.constructor[Symbol.species]();
        }
    }], [{
        key: Symbol.species,

        // defer `species` to derived constructor
        get: function get() {
            return this;
        }
    }]);

    return Foo;
}();

var Bar = function (_Foo) {
    _inherits(Bar, _Foo);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).apply(this, arguments));
    }

    _createClass(Bar, null, [{
        key: Symbol.species,

        // force `species` to be parent constructor
        get: function get() {
            return Foo;
        }
    }]);

    return Bar;
}(Foo);

var a = new Foo();
var b = a.spawn();
console.log(b instanceof Foo);
console.log(b instanceof Bar);

var x = new Bar();
var y = x.spawn();
console.log(x instanceof Bar);
console.log(x instanceof Foo);
console.log(y instanceof Bar);
console.log(y instanceof Foo);

//# sourceMappingURL=symbol.species.2-compiled.js.map