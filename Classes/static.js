/**
 * Created by JCLG on 3/31/2016.
 */

class Foo{
    static cool(){
        console.log('cool');
    }
    wow(){
        console.log('wow');
    }
}

class Bar extends Foo{
    static awesome(){
        super.cool();
        console.log('awesome');
    }
    neat(){
        super.wow();
        console.log('neat');
    }
}

Foo.cool();
Bar.cool();
Bar.awesome();
//Bar.wow();    //is not a function
//Bar.neat();   //is not a function
console.log('---------');
var b = new Bar();
b.neat();
b.wow();
//b.awesome();  //is not a function
//b.cool();     //is not a function