/**
 * Created by JCLG on 3/16/2016.
 */
'use strict';

module.exports.name = 'global';

var inline = function inline() {
    return console.log(undefined);
};

var controller = {
    name: 'obj',
    makeRequest: function makeRequest() {
        var _this = this;

        (function () {
            return console.log(_this.name);
        })();
        inline();
        return function () {
            return console.log(_this.name);
        };
    },
    makeAnotherRequest: function makeAnotherRequest() {
        console.log(undefined);
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

var o = function o() {
    var _this2 = this;

    this.name = 'isolated';
    this.action = function () {
        return console.log(_this2);
    };
};

//new o().action();

var obj = {
    name: 'obj',
    action1: function action1() {
        console.log(this);
    },

    action2: function action2() {
        console.log(undefined);
    },
    action3: function action3() {
        var _this3 = this;

        (function () {
            return console.log(_this3);
        })();
        return function () {
            return console.log(_this3);
        };
    }
};

obj.action1();
obj.action2();
var af = obj.action3();
af();

//# sourceMappingURL=this-compiled.js.map