/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

var w = 1 , z = 2;

function foo(x = w + 1, y = x + 1, z = z + 1){
    console.log(x, y, z);
}

foo();

