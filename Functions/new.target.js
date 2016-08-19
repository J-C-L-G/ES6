/**
 * Created by JCLG on 4/5/2016.
 */

class Parent {
    constructor(){
        console.log(new.target);
        if(new.target === Parent){
            console.log('Parent instantiated');
        }else{
            console.log('A child instantiated');
        }
    }
}

class Child extends Parent{}

var p = new Parent();
var b = new Child();
