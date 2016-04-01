"use strict";

/**
 * Created by JCLG on 3/31/2016.
 */

var p1 = Promise.resolve(42);

var p2 = new Promise(function (resolve) {
    resolve(42);
});

p1.then(function (data) {
    console.log(data);
    return data;
}).then(function (data) {
    console.log(data);
});

p2.then(function (data) {
    console.log(data);
    return data;
}).then(function (data) {
    console.log(data);
});

//# sourceMappingURL=Promise.resolve-compiled.js.map