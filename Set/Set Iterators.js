/**
 * Created by JCLG on 4/2/2016.
 */

var s = new Set();

var x = {id:1},
    y = {id:2};

s.add(x).add(y);

var keys = [ ...s.keys() ],
    vals = [ ...s.values()],
    entries = [...s.entries()];

console.log(keys);
console.log(vals);
console.log(entries);