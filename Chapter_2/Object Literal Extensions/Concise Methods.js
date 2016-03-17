/**
 * Created by JCLG on 3/16/2016.
 */

function test(){}

var obj1 = {
    x : function(){},
    y : test
};

var obj2 = {
    x(){},
    y:test
};

//generator fn
var obj3 = {
    *gen(){},
};