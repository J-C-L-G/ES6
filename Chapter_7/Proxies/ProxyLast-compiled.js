'use strict';

/**
 * Created by JCLG on 4/6/2016.
 */

var handlers = {
    get: function get(target, key, context) {
        return function () {
            context.speak(key + '!');
            target[key]();
        };
    }
},
    catchall = new Proxy({
    everyone: function everyone() {
        console.log('aaa');
    }
}, handlers),
    greeter = {
    speak: function speak() {
        var who = arguments.length <= 0 || arguments[0] === undefined ? "someone" : arguments[0];

        console.log('hello ' + who);
    }
};

// set up `greeter` to fall back to `catchall`
Object.setPrototypeOf(greeter, catchall);

console.log(greeter.__proto__);
greeter.speak(); // hello someone
greeter.speak("world"); // hello world
greeter.everyone(); // hello everyone!

//# sourceMappingURL=ProxyLast-compiled.js.map