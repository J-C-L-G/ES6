'use strict';

var _o;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by JCLG on 3/19/2016.
 */

var sym = Symbol("some optional description");
console.log(sym);
console.log(typeof sym === 'undefined' ? 'undefined' : _typeof(sym));

console.log(sym instanceof Symbol);

var symObj = Object(sym);
console.log(symObj instanceof Symbol);
console.log(symObj.valueOf() === sym);

var EVT_LOGIN = Symbol('event.login');
//evthub.listen(EVT_LOGIN, function(data){
//
//});

var symbol = Symbol.for('firstSymbol'),
    symbol2 = Symbol.for('firstSymbol');
console.log(symbol == symbol2);

var s = Symbol.for('something cool');
var desc = Symbol.keyFor(s);
console.log(desc);
//Get the Symbol for the Registry again
var s2 = Symbol.for(desc);
console.log(s == s2);
console.log(s);

/* Symbol as Object Properties*/

var o = (_o = {
    foo: 42
}, _defineProperty(_o, Symbol('bar'), "Hello World"), _defineProperty(_o, 'baz', true), _o);

console.log(o);
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));

var a = [1, 2, 3];
var iterator = a[Symbol.iterator]();
console.log(iterator.next());

//# sourceMappingURL=createSymbol-compiled.js.map