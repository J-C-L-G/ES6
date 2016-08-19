/**
 * Created by JCLG on 3/31/2016.
 */

class Foo{
    constructor(){
        console.log('Foo: ', new.target.name);
    }
}

class Bar extends Foo{
    constructor(){
        super();
        console.log('Bar: ', new.target.name);
    }
    baz(){
        console.log('baz: ', new.target);
    }
}

console.log('----------------');
var a = new Foo();
console.log('----------------');
var b = new Bar();
console.log('----------------');
b. baz();
