/**
 * Created by JCLG on 3/16/2016.
 */

function foo(str){
    var name = "foo";
    console.log(str);
}

function bar(){
    var name = "bar";
    foo(`Hello from ${name}!`);
}

var name = "global";
bar();