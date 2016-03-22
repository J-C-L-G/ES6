/**
 * Created by JCLG on 3/22/2016.
 */

function *foo(){
    var x = 10,
        y = 20;
    console.log(x,y);
    yield;
    var z = x + y;
    console.log(z);
    yield;
    console.log('end of the process');
}

var iterator = foo();
iterator.next();
iterator.next();

