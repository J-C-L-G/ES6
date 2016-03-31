/**
 * Created by JCLG on 3/31/2016.
 */

class Foo{
    constructor(){
        this.a = 1;
    }
}

class Bar extends Foo{
    constructor(){
        super();
        this.b = 2;
    }
}

var b = new Bar();
console.log(b);