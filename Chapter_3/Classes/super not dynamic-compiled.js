'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by JCLG on 3/31/2016.
 */

var ParentA = function () {
    function ParentA() {
        _classCallCheck(this, ParentA);

        this.id = 'a';
    }

    _createClass(ParentA, [{
        key: 'foo',
        value: function foo() {
            console.log('ParentA: ', this.id);
        }
    }]);

    return ParentA;
}();

var ChildA = function (_ParentA) {
    _inherits(ChildA, _ParentA);

    function ChildA() {
        _classCallCheck(this, ChildA);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChildA).apply(this, arguments));
    }

    _createClass(ChildA, [{
        key: 'foo',
        value: function foo() {
            _get(Object.getPrototypeOf(ChildA.prototype), 'foo', this).call(this);
            console.log('ChildA: ', this.id);
        }
    }]);

    return ChildA;
}(ParentA);

var ParentB = function () {
    function ParentB() {
        _classCallCheck(this, ParentB);

        this.id = 'b';
    }

    _createClass(ParentB, [{
        key: 'foo',
        value: function foo() {
            console.log('ParentB: ', this.id);
        }
    }]);

    return ParentB;
}();

var ChildB = function (_ParentB) {
    _inherits(ChildB, _ParentB);

    function ChildB() {
        _classCallCheck(this, ChildB);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ChildB).apply(this, arguments));
    }

    _createClass(ChildB, [{
        key: 'foo',
        value: function foo() {
            _get(Object.getPrototypeOf(ChildB.prototype), 'foo', this).call(this);
            console.log('ChildB: ', this.id);
        }
    }]);

    return ChildB;
}(ParentB);

/* Usage */


var a = new ChildA();
a.foo();
var b = new ChildB();
b.foo();
console.log('**************');
//borrow b.foo() to use in a context
b.foo.call(a);

//# sourceMappingURL=super not dynamic-compiled.js.map