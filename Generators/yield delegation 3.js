/**
 * Created by JCLG on 3/29/2016.
 */

function *foo() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

function *bar() {
    var x = yield *foo();
    console. log( "x:" , x );
    yield x;
}

for (var v of bar()) {
    console.log(v);
}

// 1 2 3
// x: 4