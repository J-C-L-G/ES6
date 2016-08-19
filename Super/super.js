/**
 * Created by JCLG on 3/16/2016.
 */

var obj1 = {
    name : 'obj1',
    foo(){
        console.log('foo in obj1 - name:' + this.name);
    },
    test : function(){
        console.log('test');
    }
};

var obj2 = {
    name : 'obj2',
    foo(){
        super.foo();
        console.log('foo in obj2 - name:' + this.name);
        super.foo();
    },
    bar(){
        console.log('bar in obj2');
    },
    test(){
        super.test();
    }
};

Object.setPrototypeOf(obj2, obj1);
obj2.foo();
obj2.bar();
obj2.test();