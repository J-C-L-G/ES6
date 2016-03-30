/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    try{
        yield 1;
    }catch(error){
        console.log('inside foo '+error);
    }
    yield 2;
    throw 'This is an error';
}

var iterator = foo();
console.log(iterator.next());
try{
    iterator.throw('Hello Error');
    console.log(iterator.next());
}catch(error){
    console.log(error);
}
console.log(iterator.next());
