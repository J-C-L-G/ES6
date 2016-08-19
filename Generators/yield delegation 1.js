/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    yield *[1,2,3];
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());