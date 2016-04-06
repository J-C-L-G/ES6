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
    },
    handlers = {
        get (target, key, context){
            console.log('accessing: ',key);
            return target[key];
        }
    },
    { proxy : pobj, revoke : prevoke} = Proxy.revocable(obj, handlers);

console.log(pobj.a);
prevoke();
console.log(pobj.a);