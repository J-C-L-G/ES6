/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    var x = yield 10;
    console.log(x);
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next(100));