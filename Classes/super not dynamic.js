/**
 * Created by JCLG on 3/31/2016.
 */

class ParentA {
    constructor(){
        this.id = 'a';
    }
    foo(){
        console.log('ParentA: ',this.id);
    }
}

class ChildA extends ParentA{
    foo(){
        super.foo();
        console.log('ChildA: ',this.id);
    }
}

class ParentB {
    constructor(){
        this.id = 'b';
    }
    foo(){
        console.log('ParentB: ',this.id);
    }
}

class ChildB extends ParentB{
    foo(){
        super.foo();
        console.log('ChildB: ',this.id);
    }
}

/* Usage */
var a = new ChildA();
a. foo();
var b = new ChildB();
b. foo();
console.log('**************');
//borrow b.foo() to use in a context
b.foo.call(a);