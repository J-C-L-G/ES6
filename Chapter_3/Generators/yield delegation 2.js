/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    var one = yield 1;
    console.log(one);
    yield 2;
    yield 3;
}

function *bar(){
    yield *foo();
}

var iterator = bar();
console.log(iterator.next());
console.log(iterator.next(100));
console.log(iterator.next());
console.log(iterator.next());