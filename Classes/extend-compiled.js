'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by JCLG on 3/30/2016.
 */

var Animal = function () {
    function Animal(type) {
        _classCallCheck(this, Animal);

        this.type = type;
    }

    _createClass(Animal, [{
        key: 'type',
        get: function get() {
            return this.__type;
        },
        set: function set(type) {
            this.__type = type;
        }
    }]);

    return Animal;
}();

var Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog(type, name) {
        _classCallCheck(this, Dog);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dog).call(this, type));

        _this.__name = name;
        return _this;
    }

    _createClass(Dog, [{
        key: 'getName',
        value: function getName() {
            return this.__name;
        }
    }, {
        key: 'name',
        get: function get() {
            return this.__name;
        },
        set: function set(name) {
            this.__name = name;
        }
    }]);

    return Dog;
}(Animal);

var dog = new Dog('canine', 'fido');
console.log(dog);
console.log(dog.type);
console.log(dog.name);
console.log(dog.getName());

//# sourceMappingURL=extend-compiled.js.map