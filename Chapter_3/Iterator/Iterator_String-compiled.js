"use strict";

/**
 * Created by JCLG on 3/22/2016.
 */

var greeting = "Hello World",
    iterator = greeting[Symbol.iterator](),
    iteratorResult;

while ((iteratorResult = iterator.next()) && !iteratorResult.done) {
    console.log(iteratorResult.value);
}

//# sourceMappingURL=Iterator_String-compiled.js.map