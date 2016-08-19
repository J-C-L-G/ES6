/**
 * Created by JCLG on 3/15/2016.
 */

function f6( { x = 10 } = {}, { y } = {y : 10 } ){
    console.log(x,y);
}

f6(undefined);              // 10 10
f6(undefined, undefined);   // 10 10
f6({}, undefined);          // 10 10
f6();                       // 10 10
f6({});                     // 10 10
f6({},{});                  // 10 undefined
f6({x:100},{y:1000});       // 100 1000