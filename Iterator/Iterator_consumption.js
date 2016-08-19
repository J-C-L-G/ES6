/**
 * Created by JCLG on 3/22/2016.
 */

var array = [1,2,3,4,5];

// The spread operator fully exhaust an iterator
function foo (x,y,z,w,p){
    console.log(x+y+z+w+p);
}

foo(...array);

//Spread an iterator inside an array
var array_b = [0,...array, 6,7];
console.log(array_b);

/*With Array Destructuring*/

var iterator = array_b[Symbol.iterator](),
    [x,y] = iterator,
    [z, ...w] = iterator;

console.log(iterator.next());
console.log(x,y);
console.log(z,w);
