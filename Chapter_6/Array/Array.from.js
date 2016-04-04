/**
 * Created by JCLG on 4/2/2016.
 */

var arrLike = {
    length : 4,
    0 : "foo",
    1 : "bar",
    3 : 'middle'
};

var arr = Array.prototype.slice.call(arrLike);
var arrCopy = arr.slice();

/*With ES6*/
var realArray = Array.from(arrLike);
console.log(realArray);
var arrCopy2 = Array.from(realArray);
console.log(arrCopy2);

