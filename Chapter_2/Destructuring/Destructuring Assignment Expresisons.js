/**
 * Created by JCLG on 3/15/2016.
 */

/* Object Destructuring */
var o = { a : 1, b : 2 , c : 3},
    a,b,c,d,p;

p = {a, b, c} = o;
console.log(p);

/* Array Destructuring */
var o = [1,2,3],
    a,b,c,p;
p = [a,b,c] = o;
console.log(p);