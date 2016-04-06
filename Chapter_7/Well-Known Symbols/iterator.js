/**
 * Created by JCLG on 4/5/2016.
 */
'use strict';

var arr = [1,2,3,4,5,6,7,8,9,10];

for(let v of arr){
    console.log(v);
}

arr[Symbol.iterator] = function*(){
    var index = 0;
    do{
        yield this[index];
    }while((index += 2) < this.length );
};

for(let v of arr){
    console.log(v);
}
