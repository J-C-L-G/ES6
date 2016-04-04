'use strict';

var _o;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by JCLG on 4/4/2016.
 */

var o = (_o = {
    foo: 42
}, _defineProperty(_o, Symbol('bar'), 'Hello World'), _defineProperty(_o, 'baz', true), _o);

console.log(Object.getOwnPropertySymbols(o));
console.log(o);

//# sourceMappingURL=Object.getOwnPropertySymbols-compiled.js.map