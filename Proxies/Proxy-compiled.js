'use strict';

/**
 * Created by JCLG on 4/5/2016.
 */

var object = {
    __a: 1,
    get a() {
        return this.__a;
    },
    set a(v) {
        this.__a = v;
    }
},
    handlers = {
    get: function get(target, key, context) {
        console.log('target: ', target);
        console.log('key: ', key);
        console.log('context: ', context);
        return Reflect.get(target, key, context);
    }
};

var proxiedObject = new Proxy(object, handlers);
console.log(object.a);
console.log(proxiedObject.a);

//# sourceMappingURL=Proxy-compiled.js.map