/**
 * Created by JCLG on 3/31/2016.
 */

var p1 = Promise.resolve(42);

var p2 = new Promise(function (resolve) {
    //resolve(42);
    //resolve({
    //    then: function () {
    //        console.log('in the object');
    //    }
    //});

    resolve(new Promise(function(resolve){resolve(42);}))
});

p2.then(function (data) {
    console.log(data);
});