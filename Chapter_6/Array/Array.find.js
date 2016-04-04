/**
 * Created by JCLG on 4/4/2016.
 */

var array = [1,2,3,4,5];
console.log(array.indexOf(3));
console.log(array.indexOf('3'));

console.log(array.some(
    function(value){
        return value == '3'
    }
));

console.log(array.some(
    function(value){
        return value == 7
    }
));

/**** ES6 ****/
console.log(array.find(
    function(value){
        return value == '3'
    }
));

console.log(array.find(
    function(value){
        return value == 7
    }
));
