/**
 * Created by JCLG on 3/17/2016.
 */

'use strict';

var arr = ["a", "b", "c", "d", "e"];

for (var val, ret, it = arr[Symbol.iterator](); (ret = it.next()) && !ret.done;) {
    val = ret.value;
    console.log(val);
}

/***************************************************************/

var iterator = arr[Symbol.iterator](),
    current = iterator.next();

while (!current.done) {
    console.log(current.value);
    current = iterator.next();
    console.log(current);
}

//# sourceMappingURL=Manually Iterating an Iterator-compiled.js.map