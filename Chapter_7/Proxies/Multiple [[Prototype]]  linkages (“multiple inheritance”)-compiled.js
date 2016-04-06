"use strict";

/**
 * Created by JCLG on 4/6/2016.
 */

var obj1 = {
    name: "obj-1",
    foo: function foo() {
        console.log("obj1.foo:", this.name);
    }
},
    obj2 = {
    name: "obj-2",
    foo: function foo() {
        console.log("obj2.foo:", this.name);
    },
    bar: function bar() {
        console.log("obj2.bar:", this.name);
    }
},
    handlers = {
    get: function get(target, key, context) {
        if (Reflect.has(target, key)) {
            return Reflect.get(target, key, context);
        }
        // fake multiple `[[Prototype]]`
        else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = target[Symbol.for("[[Prototype]]")][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var P = _step.value;

                        if (Reflect.has(P, key)) {
                            return Reflect.get(P, key, context);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
    }
},
    obj3 = new Proxy({
    name: "obj-3",
    baz: function baz() {
        this.foo();
        this.bar();
    }
}, handlers);
// fake multiple `[[Prototype]]` links
obj3[Symbol.for("[[Prototype]]")] = [obj1, obj2];
obj3.baz();
// obj1.foo: obj-3
// obj2.bar: obj-3

//# sourceMappingURL=Multiple [[Prototype]]  linkages (“multiple inheritance”)-compiled.js.map