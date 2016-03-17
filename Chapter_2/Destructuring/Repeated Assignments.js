/**
 * Created by JCLG on 3/15/2016.
 */

var { a : X, a :  Y} = { a : 1};
console.log(X,Y);

var { a:{ x : X, x : Y}, a} = {a:{x:1}};
console.log(X,Y,a);

var { a : X, a: Y, a: [A,Z]} = { a : [1,2] };
X.push(2);
Y[0] = 10;
console.log(X,Y,Z,A);
