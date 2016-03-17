/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

function foo() {
  var x = arguments.length <= 0 || arguments[0] === undefined ? 11 : arguments[0];
  var y = arguments.length <= 1 || arguments[1] === undefined ? 31 : arguments[1];

  console.log(x + y);
}

foo();
foo(5, 6);
foo(0, 42);

foo(5);
foo(5, undefined); // undefined is missing
foo(5, null); // null coerces to 0

foo(undefined, 6);
foo(null, 6);

//# sourceMappingURL=default_params-compiled.js.map