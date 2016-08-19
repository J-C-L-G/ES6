/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

var funcs = [];

for(let i = 0; i < 5 ; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[3]();
