"use strict";

/**
 * Created by JCLG on 4/6/2016.
 */

var vals = ["foo", "bar", 42, "baz"];

/*
 The ~ operator here conforms the return value of indexOf(..) to a
 value range that is suitably boolean coercible. That is, -1 produces 0
 (falsy), and anything else produces a nonzero (truthy) value, which
 is what we for deciding if we found the value or not.
 */

if (~vals.indexOf(42)) {
  console.log('found');
}

if (vals.includes(42)) {
  console.log('found');
}

//# sourceMappingURL=Array.includes-compiled.js.map