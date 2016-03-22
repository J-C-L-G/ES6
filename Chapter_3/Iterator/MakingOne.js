/**
 * Created by JCLG on 3/22/2016.
 */

var it = {
    //make the 'it' iterator an iterable
    [Symbol.iterator](){ return this;},
    next(){
        return {
            value : this.values[this.tmp], done : (this.tmp++ == this.values.length)
        };
    },
    values : [1,2,3,4,5],
    tmp : 0
};

for(var v of it){
    console.log(v);
}

