"use strict";

/**
 * Created by JCLG on 4/5/2016.
 */

var messages = [],
    handlers = {
    get: function get(target, key) {
        // string value?
        if (typeof target[key] == "string") {
            // filter out punctuation
            return target[key].replace(/[^\w]/g, "");
        }
        // pass everything else through
        return target[key];
    },
    set: function set(target, key, val) {
        // only set unique strings, lowercased
        if (typeof val == "string") {
            val = val.toLowerCase();
            if (target.indexOf(val) == -1) {
                target.push(val.toLowerCase());
            }
        }
        return true;
    }
},
    messages_proxy = new Proxy(messages, handlers);

// elsewhere:
messages_proxy.push("heLLo...", 42, "wOrlD!!", "WoRld!!");
console.log('***');
messages_proxy.forEach(function (val) {
    console.log(val);
});
console.log('***');

// hello world
messages.forEach(function (val) {
    console.log(val);
});
// hello... world!!

//# sourceMappingURL=ProxyFirst-compiled.js.map