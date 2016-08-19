/**
 * Created by JCLG on 4/4/2016.
 */

var o1 = {
    foo(){console.log('foo')}
};

var o2 = Object.assign(
            Object.create(o1),
            {
                bar(){
                    console.log('bar');
                }
            }
        );

o2.foo();
o2.bar();