"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by JCLG on 4/2/2016.
 */

var s = new Set();

var x = { id: 1 },
    y = { id: 2 };

s.add(x).add(y);

var keys = [].concat(_toConsumableArray(s.keys())),
    vals = [].concat(_toConsumableArray(s.values())),
    entries = [].concat(_toConsumableArray(s.entries()));

console.log(keys);
console.log(vals);
console.log(entries);

//# sourceMappingURL=Set Iterators-compiled.js.map