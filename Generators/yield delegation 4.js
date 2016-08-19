/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(x){
    if(x < 3){
        x = yield *foo(x + 1);
        console.log(x);
    }
    return x * 2;
}

var iterator = foo(1);
console.log(iterator.next());
