/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

function foo(){
    return [1,2,3];
}

var [a, b, c, d] = foo();
console.log(a,b,c);


function bar(){
    return {
        x : 4,
        y : 5,
        z : 6
    }
}

var {x : xl, y : yl, z : zl} = bar();
console.log(xl, yl, zl);

/*Shorten Syntax*/
var {x, y, z} = bar();
console.log(x, y, z);

/*Long Syntax*/
var {x : localX, y : localY, z : localZ} = bar();
console.log(localX, localY, localZ);