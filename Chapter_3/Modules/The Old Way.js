/**
 * Created by JCLG on 3/30/2016.
 */

function Hello(name){
    function greeting(){
        console.log('Hello ' + name + '!');
    }
    return {
        greeting : greeting
    }
}

var me = Hello('Carlos');
me.greeting();

var you = (function(name){
    function greeting(){
        console.log('Hello ' + name + '!');
    }
    return {
        greeting : greeting
    };
})('Snow');
you.greeting();