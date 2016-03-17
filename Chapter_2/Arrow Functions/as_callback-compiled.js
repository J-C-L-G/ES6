"use strict";

/**
 * Created by JCLG on 3/16/2016.
 */

var a = [1, 2, 3, 4, 5];
a = a.map(function (v) {
  return v * 2;
}).reduce(function (acum, v) {
  return acum + v;
});

console.log(a);

//# sourceMappingURL=as_callback-compiled.js.map