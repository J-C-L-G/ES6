/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

function foo(){
    return [1,2,3];
}

function bar(){
    return {
        x: 4,
        y: 5,
        z: 6
    };
}

/*
 To work in Node,
 declare the variables in the same line:
 var [a,b,c] = foo();
 */
var a, b, c, d, e, f;
[a,b,c] = foo();
({x : d, y : e, z : f} = bar());
console.log(a,b,c,d,e,f);

