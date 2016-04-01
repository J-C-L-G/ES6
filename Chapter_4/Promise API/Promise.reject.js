/**
 * Created by JCLG on 4/1/2016.
 */

var p1 = Promise.reject('Oops');

var p2 = new Promise(function pr(resolve, reject){
    reject('Oops');
});

p2.then(null,function(error){console.log(error)});