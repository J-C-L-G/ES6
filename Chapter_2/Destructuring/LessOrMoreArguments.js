/**
 * Created by JCLG on 3/15/2016.
 */

function foo(){
    return [1,2,3];
}

function bar(){
    return {
        x:4,
        y:5,
        z:6
    };
}

var [,b,,,r] = foo();
var {x,y,t} = bar();

console.log(b,x,y,r,t);

var a1 = [1,2,3,4,5];
var [t,...u] = a1;
console.log(u);