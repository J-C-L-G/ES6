/**
 * Created by JCLG on 3/15/2016.
 */

function foo( x = (function(v){ return v + 11;})(31) ){
    console.log(x);
}

foo();


function ajax(url, cb = function(){}){
    //...
}

function ajax(url, cb = Function.prototype){
    //...
}