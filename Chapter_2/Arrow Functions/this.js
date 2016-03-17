/**
 * Created by JCLG on 3/16/2016.
 */
'use strict';

module.exports.name = 'global';

var inline = () => console.log(this);

var controller = {
    name: 'obj',
    makeRequest: function () {
        (()=>console.log(this.name))();
        inline();
        return ()=>console.log(this.name);
    },
    makeAnotherRequest: ()=> {
        console.log(this)
    }
};

//controller.makeRequest();
//controller.makeAnotherRequest();
///* Wont change the context*/
//inline.call(controller);
//setTimeout(inline, 1);
//var test = controller.makeRequest.call({name:'test'});
//test();
//test.call({name:'changed'});
//controller.makeAnotherRequest.call({name:'test'});

var o = function(){
    this.name = 'isolated';
    this.action = ()=>console.log(this);
};

//new o().action();

var obj = {
    name:'obj',
    action1(){
        console.log(this);
    },
    action2 : ()=>{
        console.log(this);
    },
    action3 : function(){
        (()=> console.log(this))();
        return ()=> console.log(this);
    }
};

obj.action1();
obj.action2();
var af = obj.action3();
af();