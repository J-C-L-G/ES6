/**
 * Created by JCLG on 3/16/2016.
 */

var a = [1,2,3,4,5];
a = a.map( v => v * 2 )
    .reduce((acum,v) => acum + v);

console.log(a);