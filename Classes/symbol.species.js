/**
 * Created by JCLG on 3/31/2016.
 */

class MyCoolArray extends Array {
    // force `species` to be parent constructor
    static get [Symbol.species]() { return Array; }
}
var a = new MyCoolArray( 1, 2, 3 ),
    b = a.map( function(v){ return v * 2; } );

console.log(b instanceof MyCoolArray);  // false
console.log(b instanceof Array);  // true

