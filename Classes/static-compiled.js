'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
        key: 'wow',
        value: function wow() {
            console.log('wow');
        }
    }], [{
        key: 'cool',
        value: function cool() {
            console.log('cool');
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

    _createClass(Bar, [{
        key: 'neat',
        value: function neat() {
            _get(Object.getPrototypeOf(Bar.prototype), 'wow', this).call(this);
            console.log('neat');
        }
    }], [{
        key: 'awesome',
        value: function awesome() {
            _get(Object.getPrototypeOf(Bar), 'cool', this).call(this);
            console.log('awesome');
        }
    }]);

    return Bar;
}(Foo);

Foo.cool();
Bar.cool();
Bar.awesome();
//Bar.wow();    //is not a function
//Bar.neat();   //is not a function
console.log('---------');
var b = new Bar();
b.neat();
b.wow();
//b.awesome();  //is not a function
//b.cool();     //is not a function

//# sourceMappingURL=static-compiled.js.map