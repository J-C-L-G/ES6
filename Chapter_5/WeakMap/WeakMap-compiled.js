"use strict";

/**
 * Created by JCLG on 4/1/2016.
 */

var m = new WeakMap();

var x = { id: 1 },
    y = { id: 2 },
    z = { id: 3 },
    w = { id: 4 };

m.set(x, y);
x = null; // { id: 1 } is GC-eligible
y = null; // { id: 2 } is GC-eligible
// only because { id: 1 } is

m.set(z, w);
w = null; // { id: 4 } is not GC-eligible
// because we still have reference to the key

//# sourceMappingURL=WeakMap-compiled.js.map