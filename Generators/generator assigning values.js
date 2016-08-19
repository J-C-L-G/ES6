/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    var x = yield 1;
    console.log('x assigned');
    var y = yield 2;
    console.log('y assigned');
    var z = yield 3;
    console.log('z assigned');
    console.log(x,y,z);
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next(100));
console.log(iterator.next(200));
console.log(iterator.next(300));
