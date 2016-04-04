'use strict';

/**
 * Created by JCLG on 4/4/2016.
 */

var arrLike = {
    length: 4,
    2: 'foo',
    1: 1,
    3: 'testOn'
};

var actualArray = Array.from(arrLike, function (value, index) {
    if (typeof value == "string") {
        return value.toUpperCase();
    } else {
        return index;
    }
});

console.log(actualArray);

//# sourceMappingURL=Array.from mapping-compiled.js.map