'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by JCLG on 3/30/2016.
 */

var Foo = function () {
    function Foo(a, b) {
        _classCallCheck(this, Foo);

        this.x = a;
        this.y = b;
    }

    _createClass(Foo, [{
        key: 'getXY',
        value: function getXY() {
            return this.x * this.y;
        }
    }]);

    return Foo;
}();

var f = new Foo(5, 10);
console.log(f.x);
console.log(f.y);
console.log(f.getXY());

var test = function A(name) {
    _classCallCheck(this, A);

    this.name = name;
};

var a = new test('Carlos');
console.log(a.name);

//# sourceMappingURL=basic class-compiled.js.map