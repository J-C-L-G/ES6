/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';
var something = true;

if(something){
    function foo(){console.log('1');}
}else{
    function foo(){console.log('2');}
}

foo();  //Legacy will print 2 , ES6 will be ReferenceError