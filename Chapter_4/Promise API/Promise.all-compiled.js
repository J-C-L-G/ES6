'use strict';

/**
 * Created by JCLG on 4/1/2016.
 */

var p1 = Promise.resolve(42);
var p2 = new Promise(function pr(resolve) {
    setTimeout(function () {
        resolve(43);
    }, 100);
});
var v3 = 44;
var p4 = new Promise(function pr(resolve, reject) {
    setTimeout(function () {
        reject('Oops');
    }, 5000);
});

Promise.all([p1, p2, v3]).then(function (values) {
    console.log(values);
});

Promise.all([p1, p2, v3, p4]).then(null, function (reason) {
    console.log(reason);
});

//# sourceMappingURL=Promise.all-compiled.js.map