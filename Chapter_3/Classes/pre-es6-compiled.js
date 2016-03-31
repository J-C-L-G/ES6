"use strict";

/**
 * Created by JCLG on 3/31/2016.
 */

function Foo() {
    this.a = 1;
}

function Bar() {
    this.b = 2;
    Foo.call(this);
}

//Bar extends Foo
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.constructor = Bar;

var b = new Bar();
console.log(b);

//# sourceMappingURL=pre-es6-compiled.js.map