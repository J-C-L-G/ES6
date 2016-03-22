/**
 * Created by JCLG on 3/19/2016.
 */

var s1 = "abc\u0301d" ,
    s2 = "ab\u0107d" ,
    s3 = "ab\u{1d49e}d" ;

console. log( s1 );  // "ab?d"
console. log( s2 );  // "ab?d"
console. log( s3 );  // "ab?"

s1.charAt(2);  // "c"
s2.charAt(2);  // "?"
s3.charAt(2);  // "" <-- unprintable surrogate
s3.charAt(3);  // "" <-- unprintable surrogate


/* Hack ES6 to obtain the charAt */

var s1 = "abc\u0301d" ,
    s2 = "ab\u0107d" ,
    s3 = "ab\u{1d49e}d" ;

console.log([... s1. normalize()][2]);  // "?"
console.log([... s2. normalize()][2]);  // "?"
console.log([... s3. normalize()][2]);  // "?

/*String.fromCodePoint and String.codePointAt*/

var s1 = "abc\u0301d",
    s2 = "ab\u0107d",
    s3 = "ab\u{1d49e}d";

String.fromCodePoint( s1.normalize().codePointAt( 2 ) ); // "?"
String.fromCodePoint( s2.normalize().codePointAt( 2 ) ); // "?"
String.fromCodePoint( s3.normalize().codePointAt( 2 ) ); // "?