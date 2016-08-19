/**
 * Created by JCLG on 3/31/2016.
 */

class Foo {
    // defer `species` to derived constructor
    static get [Symbol.species]() { return this; }
    spawn() {
        return new this.constructor[Symbol.species]();
    }
}

class Bar extends Foo {
    // force `species` to be parent constructor
    static get [Symbol.species]() { return Foo; }
}

var a = new Foo();
var b = a.spawn();
console.log(b instanceof Foo);
console.log(b instanceof Bar);

var x = new Bar();
var y = x.spawn();
console.log(x instanceof Bar);
console.log(x instanceof Foo);
console.log(y instanceof Bar);
console.log(y instanceof Foo);