"use strict";

var _templateObject = _taggedTemplateLiteral(["Hello World\nthis is a test"], ["Hello World\nthis is a test"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by JCLG on 3/16/2016.
 */

function showRaw(strings) {
  console.log(strings);
  console.log(strings.raw);
}

showRaw(_templateObject);

//# sourceMappingURL=Raw Strings-compiled.js.map