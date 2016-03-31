/**
 * Created by JCLG on 3/30/2016.
 */

class Foo {
    constructor(a,b){
        this.x = a;
        this.y = b;
    }

    getXY(){
        return this.x * this.y;
    }
}

var f = new Foo(5,10);
console.log(f.x);
console.log(f.y);
console.log(f.getXY());

var test = class A{
    constructor(name){
        this.name = name;
    }
};

var a = new test('Carlos');
console.log(a.name);