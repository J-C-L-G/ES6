'use strict';

/**
 * Created by JCLG on 4/6/2016.
 */

var o = {};
o[Symbol('c')] = 'yay';
o[2] = true;
o[1] = false;
o.b = 'awesome';
o.a = 'cool';

console.log(Reflect.ownKeys(o));
console.log(Object.getOwnPropertyNames(o));
console.log(Object.getOwnPropertySymbols(o));

//# sourceMappingURL=Ordering-compiled.js.map