"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by JCLG on 3/19/2016.
 */

var s1 = "abćd",
    s2 = "abćd",
    s3 = "ab𝒞d";

console.log(s1); // "ab?d"
console.log(s2); // "ab?d"
console.log(s3); // "ab?"

s1.charAt(2); // "c"
s2.charAt(2); // "?"
s3.charAt(2); // "" <-- unprintable surrogate
s3.charAt(3); // "" <-- unprintable surrogate

/* Hack ES6 to obtain the charAt */

var s1 = "abćd",
    s2 = "abćd",
    s3 = "ab𝒞d";

console.log([].concat(_toConsumableArray(s1.normalize()))[2]); // "?"
console.log([].concat(_toConsumableArray(s2.normalize()))[2]); // "?"
console.log([].concat(_toConsumableArray(s3.normalize()))[2]); // "?

/*String.fromCodePoint and String.codePointAt*/

var s1 = "abćd",
    s2 = "abćd",
    s3 = "ab𝒞d";

String.fromCodePoint(s1.normalize().codePointAt(2)); // "?"
String.fromCodePoint(s2.normalize().codePointAt(2)); // "?"
String.fromCodePoint(s3.normalize().codePointAt(2)); // "?

//# sourceMappingURL=charAt-compiled.js.map