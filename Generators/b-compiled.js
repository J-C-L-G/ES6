'use strict';

/**
 * Created by JCLG on 3/29/2016.
 */

var a = require('./a');
console.log(a);
a.b = function () {};
console.log(a);
var secondA = require('./a');
a.a = 100;
console.log(secondA);
var thirdA = require('./a');
console.log(thirdA);

//# sourceMappingURL=b-compiled.js.map