/**
 * Created by JCLG on 3/22/2016.
 */

function *foo(){
    while(true){
        yield Math.random();
    }
}

var iterator = foo();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);