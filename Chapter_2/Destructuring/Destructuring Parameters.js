/**
 * Created by JCLG on 3/15/2016.
 */

function f3(a = 5,[x, y, ...z],...w){
    console.log(a,x,y,z,w);
}

f3(undefined,[1,2,3,4,5],6,7,8,[9,10]);