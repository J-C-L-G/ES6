"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by JCLG on 3/19/2016.
 */

var s1 = "\xE9",
    s2 = "é";

console.log(s1, s2);

/*Obtain an Unicode Aware Iterator doesn't work*
because these are not surrogate pairs, these are called
Combining Diacritical Marks */
console.log([].concat(_toConsumableArray(s1)).length);
console.log([].concat(_toConsumableArray(s2)).length);

/*Unicode Normalization*/
console.log(s1.normalize().length);
console.log(s2.normalize().length);
console.log(s1 == s2);
console.log(s1 == s2.normalize());

//# sourceMappingURL=normalization-compiled.js.map