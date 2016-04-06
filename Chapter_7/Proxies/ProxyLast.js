/**
 * Created by JCLG on 4/6/2016.
 */

var handlers = {
        get(target, key, context){
            return function () {
                context.speak(key + '!');
                target[key]();
            };
        }
    },
    catchall = new Proxy({
        everyone(){
            console.log('aaa')
        }
    }, handlers),
    greeter = {
        speak(who = "someone"){
            console.log('hello ' + who);
        }
    };

// set up `greeter` to fall back to `catchall`
Object.setPrototypeOf(greeter, catchall);

console.log(greeter.__proto__)
greeter.speak();  // hello someone
greeter.speak("world");  // hello world
greeter.everyone();  // hello everyone!
