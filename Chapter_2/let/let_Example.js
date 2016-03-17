/**
 * Created by JCLG on 3/11/2016.
 */

'use strict';

let a = 2;

if(a > 1){
    let b = a * 3;
    console.log(b); // 6

    //The i variable will live only in the for{} statement
    for(let i = a ; i <= b ; i++ ){
        let j = i + 10;
        console.log(j);
    }
    // 11, 12, 13, 14, 15

    let c =  a + b;
    console.log(c); // 8
}

//console.log(b); //Reference Error

{
    console.log(hoistedVar);    //Hoisted = undefined
    //console.log(nonHoistedLet); //Non Hoisted = Reference Error

    var hoistedVar;
    let nonHoistedLet;
}
