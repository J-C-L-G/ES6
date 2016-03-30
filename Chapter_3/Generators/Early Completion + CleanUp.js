/**
 * Created by JCLG on 3/29/2016.
 */

function *foo(){
    try{
        yield 1;
        yield 2;
        yield 3;
    }finally{
        console.log('cleanup!');
    }
}

for (var v of foo()) {
    console.log( v );
}
console.log('**************');
var it = foo();
console.log(it.next());
console.log(it.return(42));

