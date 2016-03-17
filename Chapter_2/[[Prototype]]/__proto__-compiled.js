'use strict';

/**
 * Created by JCLG on 3/16/2016.
 */

var obj1 = {
    name: 'obj 1',
    execute: function execute() {
        console.log('now executing... ' + this.name);
    }
};

var obj2 = {
    name: 'obj 2',
    __proto__: obj1
};

obj2.execute();

//# sourceMappingURL=__proto__-compiled.js.map