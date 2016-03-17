/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

function foo(x = 11, y = 31){
    console.log(x+y);
}

foo();
foo(5,6);
foo(0,42);

foo(5);
foo(5, undefined);  // undefined is missing
foo(5, null);       // null coerces to 0

foo(undefined, 6);
foo(null, 6);