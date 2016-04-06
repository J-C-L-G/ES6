/**
 * Created by JCLG on 4/5/2016.
 */

/* ES5 */
//function Foo(){}
//var a = new Foo();
//console.log(a.toString());
//console.log(a instanceof Foo);


/* ES6 */
function Bar(greeting){
    this.greeting = greeting;
}

Bar.prototype[Symbol.toStringTag] = 'Bar';
Object.defineProperty(Bar, Symbol.hasInstance,{
    value : function(inst){
        return inst.greeting == 'hello';
    }
});

var b1 = new Bar('world'),
    b2 = new Bar('hello');

console.log(b1.toString());
console.log(b1 instanceof Bar);
console.log(b2.toString());
console.log(b2 instanceof Bar);
b1[Symbol.toStringTag] = 'Cool';
b1.greeting = 'hello';
console.log(b1.toString());
console.log(b1 instanceof Bar);
