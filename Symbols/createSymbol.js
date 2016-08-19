/**
 * Created by JCLG on 3/19/2016.
 */

var sym = Symbol("some optional description");
console.log(sym);
console.log(typeof sym);


console.log(sym instanceof Symbol);

var symObj = Object(sym);
console.log(symObj instanceof Symbol);
console.log(symObj.valueOf() === sym);

const EVT_LOGIN = Symbol('event.login');
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

var o = {
    foo : 42,
    [Symbol('bar')]:"Hello World",
    baz : true
};

console.log(o);
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));

var a = [1,2,3];
var iterator = a[Symbol.iterator]();
console.log(iterator.next());