/**
 * Created by JCLG on 4/2/2016.
 */

var s = new WeakSet();

var x = { id : 1},
    y = { id : 2};

s.add(x);
s.add(y);

console.log(s.has(x));
x = y = null;
console.log(s.has(x));
