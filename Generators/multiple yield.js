/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    var array = [yield 1, yield 2, yield 3];
    console.log(array, yield 4);
}

var iterator = foo();
iterator.next();
iterator.next(10);
iterator.next(20);
iterator.next(30);
iterator.next(40);
