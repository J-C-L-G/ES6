'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by JCLG on 4/4/2016.
 */

var array = ['a', 'b', 'c', 'd', 'e'];
console.log([].concat(_toConsumableArray(array.keys())));
console.log(array.values());
console.log([].concat(_toConsumableArray(array.entries())));

//# sourceMappingURL=Array.Iterator Methods-compiled.js.map