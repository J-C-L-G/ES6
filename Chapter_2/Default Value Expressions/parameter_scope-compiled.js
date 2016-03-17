/**
 * Created by JCLG on 3/15/2016.
 */

'use strict';

var w = 1,
    z = 2;

function foo() {
  var x = arguments.length <= 0 || arguments[0] === undefined ? w + 1 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ? x + 1 : arguments[1];
  var z = arguments.length <= 2 || arguments[2] === undefined ? z + 1 : arguments[2];

  console.log(x, y, z);
}

foo();

//# sourceMappingURL=parameter_scope-compiled.js.map