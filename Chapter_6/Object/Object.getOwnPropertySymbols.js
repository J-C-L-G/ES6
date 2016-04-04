/**
 * Created by JCLG on 4/4/2016.
 */

var o = {
    foo : 42,
    [Symbol('bar')] : 'Hello World',
    baz : true
};

console.log(Object.getOwnPropertySymbols(o));
console.log(o);