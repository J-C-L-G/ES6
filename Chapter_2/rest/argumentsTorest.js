/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

function foo(...args){
    /*
    * Since args is already an array we dont need to use:
    * var args = Array.prototype.slice.call( arguments );
    */
    args.shift();
    console.log(...args);
    console.log(args);
}

foo(1,2,3,4,5);