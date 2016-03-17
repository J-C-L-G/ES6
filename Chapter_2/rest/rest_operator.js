/**
 * Created by JCLG on 3/14/2016.
 */

function foo(x,y,z){
    console.log(x,y,z);
}

foo(...[1,2,3]);

var a = [2,3,4];
var b = [1,...a, 5];

console.log(b);

function bar(x, y, ...z){
    console.log(x,y,z);
}

bar(1,2,'a','b','c','d');