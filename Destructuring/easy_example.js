/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

var aa = 10, bb = 20;
var o = { x : aa, y : bb}; //Object literal target : source
var {x : AA , y : BB} = o; //Destructuring  source : target
console.log(AA, BB);

