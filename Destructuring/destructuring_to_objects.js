/**
 * Created by JCLG on 3/15/2016.
 */

function foo(){
    return [1,2,3];
}

function bar(){
    return {
        r : 'special',
        x : 4,
        y : 5,
        z : 6
    }
}

var o ={}, dynamic = 'r';
[o.a, o.b, o.c] = foo();
({x:o.x, y:o.y, z:o.z} = bar());
({[dynamic]:o[dynamic]} = bar());
console.log(o);
