/**
 * Created by JCLG on 3/30/2016.
 */

export function foo() {
    // ..
}
export var awesome = 42;
var bar = [1, 2, 3];
export { bar };



function foo() {
    // ..
}
var awesome = 42;
var bar = [1, 2, 3];
export { foo as buz, awesome, bar };