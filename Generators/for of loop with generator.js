/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    yield 1;
    yield 2;
    yield 3;
}

for(var v of foo()){
    console.log(v);
}