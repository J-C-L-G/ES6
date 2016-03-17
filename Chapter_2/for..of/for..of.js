/**
 * Created by JCLG on 3/17/2016.
 */
'use strict';

var arr = ["a","b","c","d","e"];
//var k = Object.keys(arr);

for(let index in arr){
    console.log(index);
}

for(let value of arr){
    console.log(value);
}

