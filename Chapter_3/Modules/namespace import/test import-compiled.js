"use strict";

var _foo = require("./foo-compiled");

var foo = _interopRequireWildcard(_foo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

foo.bar(); /**
            * Created by JCLG on 3/30/2016.
            */

foo.bar = function () {
  console.log('this has been modified');
};
foo.x = 100;
foo.bar();

//# sourceMappingURL=test import-compiled.js.map