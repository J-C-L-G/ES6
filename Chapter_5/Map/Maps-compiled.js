'use strict';

/**
 * Created by JCLG on 4/1/2016.
 */

var map = new Map();

var x = { id: 1 },
    y = { id: 2 };

map.set(x, 'foo');
map.set(y, 'bar');

console.log(map.get(x));
console.log(map.get(y));
console.log(map);

//map.delete(x);
//console.log(map);
//
//console.log(map.size);
//map.clear();
//console.log(map.size);

console.log(map.entries());
var map2 = new Map(map.entries());
// same as:
// var m2 = new Map( m );
console.log(map2);

//# sourceMappingURL=Maps-compiled.js.map