'use strict';

/**
 * Created by JCLG on 4/1/2016.
 */

var p1 = Promise.resolve(42);
var p2 = new Promise(function pr(resolve) {
    setTimeout(function () {
        resolve(43);
    }, 5001);
});
var v3 = 44;
var p4 = new Promise(function pr(resolve, reject) {
    setTimeout(function () {
        reject('Oops');
    }, 5000);
});

Promise.race([p1, p2, v3]).then(function (value) {
    console.log(value);
});

Promise.race([p2, p4]).then(function (value) {
    console.log(value);
}, function (reason) {
    console.log(reason);
});

//# sourceMappingURL=Promise.race-compiled.js.map