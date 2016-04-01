'use strict';

/**
 * Created by JCLG on 3/31/2016.
 */

var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = Math.random() * 10;
        if (num > 5) resolve(num);else reject('Not bigger than 5: ' + num);
    }, 5000);
});

console.log('1');

p.then(function (data) {
    console.log(data);
    return data;
}, function (error) {
    console.log(error);
    return error;
}).then(function (data) {
    console.log(data);
    return data;
}, function (error) {
    console.log(error);
    return error;
});

setTimeout(function () {
    p.then(function (data) {
        console.log(data);
    }, function (error) {
        console.log(error);
    });
}, 10000);

console.log('2');

//# sourceMappingURL=simple-compiled.js.map