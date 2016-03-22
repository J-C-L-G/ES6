/**
 * Created by JCLG on 3/22/2016.
 */

var m = new Map();
m.set("foo", 42);
m.set({cool:true},"hello world");

var it1 = m[Symbol.iterator](),
    it2 = m.entries();

console.log(it1.next());
console.log(it2.next());