/**
 * Created by JCLG on 4/1/2016.
 */

/**
 * Created by JCLG on 4/1/2016.
 */

var map = new Map();

var x = {id: 1},
    y = {id: 2};

map.set(x, 'foo');
map.set(y, 'bar');
console.log(map);

console.log(map.values());
console.log(map.keys());
console.log(map.entries());

var vals = [ ...map.values() ];
console.log(vals);
var vals2 = Array.from( map.values() );
console.log(vals2);