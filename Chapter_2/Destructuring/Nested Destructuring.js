/**
 * Created by JCLG on 3/15/2016.
 */

var a1 = [1, [2,3,4], 5];
var o1 = { x: { y : { z : 6} } };

var [a, [b,c,d],e] = a1;
var {x : { y : { z : w } } } = o1;

console.log(a,b,c,d,e,w);

