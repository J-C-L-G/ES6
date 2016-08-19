'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by JCLG on 4/1/2016.
 */

/**
 * Created by JCLG on 4/1/2016.
 */

var map = new Map();

var x = { id: 1 },
    y = { id: 2 };

map.set(x, 'foo');
map.set(y, 'bar');
console.log(map);

console.log(map.values());
console.log(map.keys());
console.log(map.entries());

var vals = [].concat(_toConsumableArray(map.values()));
console.log(vals);
var vals2 = Array.from(map.values());
console.log(vals2);

//# sourceMappingURL=Maps.values-compiled.js.map