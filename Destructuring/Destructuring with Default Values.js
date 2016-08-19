/**
 * Created by JCLG on 3/15/2016.
 */

function foo(){
    return [1,2,3];
}

function bar(){
    return {x : 4, y : 5, z : 6}
}

var [a = 3, b = 6, c = 9, d = 12] = foo();
var {x = 5, y = 10, z = 15, w = 20} = bar();

console.log(a,b,c,d,x,y,z,w);