/**
 * Created by JCLG on 3/16/2016.
 */

var f1 = ()=> 12;

var f2 = x => x * 2;

var f3 = (x,y) => {
    var z = x * 2 + y;
    y++;
    x *= 3;
    return (x + y + z) / 2;
};

console.log(f1());