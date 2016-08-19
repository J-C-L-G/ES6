"use strict";

/**
 * Created by JCLG on 3/16/2016.
 */

function test() {}

var obj1 = {
    x: function x() {},
    y: test
};

var obj2 = {
    x: function x() {},

    y: test
};

//generator fn
var obj3 = {
    gen: regeneratorRuntime.mark(function gen() {
        return regeneratorRuntime.wrap(function gen$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                    case "end":
                        return _context.stop();
                }
            }
        }, gen, this);
    })
};

//# sourceMappingURL=Concise Methods-compiled.js.map