/**
 * Created by JCLG on 3/14/2016.
 */

'use strict';

var funcs = [];

var _loop = function _loop(i) {
    funcs.push(function () {
        console.log(i);
    });
};

for (var i = 0; i < 5; i++) {
    _loop(i);
}

funcs[3]();

//# sourceMappingURL=let+for-compiled.js.map