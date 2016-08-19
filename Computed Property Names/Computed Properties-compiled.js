'use strict';

var _o;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by JCLG on 3/16/2016.
 */

var prefix = 'user_';

var o = (_o = {
    baz: function baz() {}
}, _defineProperty(_o, prefix + "one", function () {
    console.log('from one');
}), _defineProperty(_o, prefix + "two", function () {
    console.log('from two');
}), _o);

o.user_one();

//# sourceMappingURL=Computed Properties-compiled.js.map