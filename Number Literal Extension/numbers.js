/**
 * Created by JCLG on 3/18/2016.
 */

/* ES5 */
var dec = 42,
  //oct = 052,
    hex = 0x2a;

Number('42');
Number('052');
Number('0x2a');

/* ES6 */
var dec = 42,
    oct = 0o52,
    hex = 0x2a,
    bin = 0b101010;

Number('42');
Number('0o52');
Number('0x2a');
Number('0b101010');

var a = 42;
console.log(a.toString());
console.log(a.toString(8));
console.log(a.toString(16));
console.log(a.toString(2));
