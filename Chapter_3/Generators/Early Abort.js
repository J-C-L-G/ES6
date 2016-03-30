/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    yield 1;
    yield 2;
    yield 3;
}

var iterator = foo();
console.log(iterator.next());
try{
    iterator.throw('Opps');
}catch(error){
    console.log(error);
}
console.log(iterator.next());