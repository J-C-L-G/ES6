/**
 * Created by JCLG on 4/4/2016.
 */

var x = NaN, y = 0, z = -0;

console.log( x === x );
console.log( y === z );
console.log(Object.is(x,x));
console.log(Object.is(y,z));


