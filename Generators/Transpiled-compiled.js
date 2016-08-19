"use strict";

/**
 * Created by JCLG on 3/29/2016.
 */

function foo() {
    var state = 0,
        x;
    function nextState(v) {
        switch (state) {
            case 0:
                {
                    state++;
                    return 42;
                }
            case 1:
                {
                    state++;
                    x = v;
                    console.log(x);
                }
        }
    }
    return {
        next: function next(v) {
            var ret = nextState(v);
            return { value: ret, done: state == 2 };
        }
    };
}

var iterator = foo();
console.log(iterator.next());
console.log(iterator.next(100));
console.log(iterator.next());

//# sourceMappingURL=Transpiled-compiled.js.map