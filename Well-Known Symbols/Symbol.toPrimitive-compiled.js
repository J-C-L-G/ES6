'use strict';

/**
 * Created by JCLG on 4/5/2016.
 */

var arr = [1, 2, 3, 4, 5];
console.log(arr + 10);

arr[Symbol.toPrimitive] = function (hint) {
    if (hint == 'default' || hint == 'number') {
        return this.reduce(function (acc, val) {
            return acc + val;
        }, 0);
    }
};
console.log(arr + 10);

//# sourceMappingURL=Symbol.toPrimitive-compiled.js.map