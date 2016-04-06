'use strict';

/**
 * Created by JCLG on 4/5/2016.
 */

var obj = {
    __a: 1,
    get a() {
        return this.__a;
    },
    set a(v) {
        this.__a = v;
    }
};
var handlers = {
    get: function get(target, key, context) {
        console.log('accessing: ', key);
        return target[key];
    }
};

var _Proxy$revocable = Proxy.revocable(obj, handlers);

var pobj = _Proxy$revocable.proxy;
var prevoke = _Proxy$revocable.revoke;


console.log(pobj.a);
prevoke();
console.log(pobj.a);

//# sourceMappingURL=Revocable Proxy-compiled.js.map