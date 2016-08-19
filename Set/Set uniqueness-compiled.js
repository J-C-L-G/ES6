'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by JCLG on 4/2/2016.
 */

var s = new Set([1, 2, 3, '1', 1]),
    unique = [].concat(_toConsumableArray(s.values()));

console.log(unique);

//# sourceMappingURL=Set uniqueness-compiled.js.map