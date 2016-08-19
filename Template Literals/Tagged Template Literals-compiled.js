"use strict";

var _templateObject = _taggedTemplateLiteral(["Everything is ", "!"], ["Everything is ", "!"]),
    _templateObject2 = _taggedTemplateLiteral(["They are ", "!"], ["They are ", "!"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by JCLG on 3/16/2016.
 */

function foo(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    console.log(strings);
    console.log(values);
    console.log(arguments);
}

function bar() {
    return foo;
}

var desc = "awesome";
foo(_templateObject, desc);
bar()(_templateObject2, desc);

//# sourceMappingURL=Tagged Template Literals-compiled.js.map