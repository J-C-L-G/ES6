/**
 * Created by JCLG on 4/1/2016.
 */

var s = new Set();

var x = {id: 1, poop:function(){console.log('poop')}},
    y = {id: 2};

s.add(x);

console.log(s.has(x));  // true
console.log(s.has(y));  // false

s.keys().next().value.poop()