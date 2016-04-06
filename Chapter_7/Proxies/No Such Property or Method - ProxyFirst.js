/**
 * Created by JCLG on 4/6/2016.
 */

var obj = {
        a: 1,
        foo() {
            console.log("a:", this.a);
        }
    },
    handlers = {
        get(target, key, context) {
            if (Reflect.has(target, key)) {
                return Reflect.get(
                    target, key, context
                );
            }
            else {
                throw "No such property/method!";
            }
        },
        set(target, key, val, context) {
            if (Reflect.has(target, key)) {
                return Reflect.set(target, key, val, context
                );
            }
            else {
                throw "No such property/method!";
            }
        }
    },
    pobj = new Proxy(obj, handlers);
pobj.a = 3;
pobj.foo();  // a: 3
pobj.b = 4;  // Error: No such property/method!
pobj.bar();  // Error: No such property/method!
