/**
 * Created by JCLG on 4/2/2016.
 */

class MyCoolArray extends Array {
    sum(){
        return this.reduce(function(acc, curr){
            return acc + curr;
        },0);
    }
}

var x = new MyCoolArray(3);
console.log(x);
console.log(x.sum());

var y = [3];
//y.sum();    //y is not a function

var z = MyCoolArray.of(3);
console.log(z.length);
console.log(z.sum());
