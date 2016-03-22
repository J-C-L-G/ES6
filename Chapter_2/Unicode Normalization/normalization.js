/**
 * Created by JCLG on 3/19/2016.
 */

var s1 = "\xE9",
    s2 = "e\u0301";

console.log(s1, s2);

/*Obtain an Unicode Aware Iterator doesn't work*
because these are not surrogate pairs, these are called
Combining Diacritical Marks */
console.log([...s1].length);
console.log([...s2].length);

/*Unicode Normalization*/
console.log(s1.normalize().length);
console.log(s2.normalize().length);
console.log(s1 == s2);
console.log(s1 == s2.normalize());


