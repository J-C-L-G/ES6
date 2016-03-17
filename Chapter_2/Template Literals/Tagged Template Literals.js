/**
 * Created by JCLG on 3/16/2016.
 */

function foo(strings, ...values){
    console.log(strings);
    console.log(values);
    console.log(arguments);
}

function bar(){
    return foo;
}

var desc = "awesome";
foo `Everything is ${desc}!`;
bar()`They are ${desc}!`;
