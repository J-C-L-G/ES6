/**
 * Created by JCLG on 3/11/2016.
 */

'use strict';

/*Implicit Block Scoping Declaration*/
var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);


/*Explicit Block Scoping Declaration (Experimental)*/
/*
let ( a = 10){
    console.log(a);
}
*/

