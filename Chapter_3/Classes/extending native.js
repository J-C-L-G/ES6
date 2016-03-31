/**
 * Created by JCLG on 3/31/2016.
 */

class MyCoolArray extends Array{
    first(){
        return this[0];
    }
    last(){
        return this[this.length - 1];
    }
}

var arr = new MyCoolArray(1,2,3);
console.log(arr.length);
console.log(arr.first());
console.log(arr.last());
console.log(arr);



class Oops extends Error{
    constructor(reason){
        super();
        this.oops = reason;
    }
}

var ouch = new Oops('I messed up');
throw ouch;