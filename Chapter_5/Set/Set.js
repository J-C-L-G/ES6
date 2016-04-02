/**
 * Created by JCLG on 4/1/2016.
 */

var s = new Set();

var x = { id : 1},
    y = { id : 2};

s.add(x);
s.add(y);
s.add(x);

console.log(s.size);
console.log(s.delete(y));
console.log(s.size);

s.clear();
console.log(s.size);
