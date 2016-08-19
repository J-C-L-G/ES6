"use strict";

/**
 * Created by JCLG on 4/4/2016.
 */

var points = [{ x: 10, y: 20 }, { x: 20, y: 30 }, { x: 30, y: 40 }, { x: 40, y: 50 }, { x: 50, y: 60 }];

console.log(points.findIndex(function matcher(value) {
    return value.x % 3 == 0 && value.y % 4 == 0;
}));

//# sourceMappingURL=Array.findIndex-compiled.js.map