/**
 * Created by JCLG on 3/15/2016.
 */

/*Object to Object*/
var o1 = {a:1, b:2, c:3},
    o2 = {};

({a:o2.x,b:o2.y,c:o2.z} = o1);
console.log(o2);


/*Object to Array*/
var o1 = {a:1, b:2, c:3},
    a1 = [];

({a:a1[0], b:a1[1], c:a1[2]} = o1);
console.log(a1);


/*Array to Object*/
var o1 = {},
    a1 = [1,2,3];

[o1.a, o1.b, o1.c] = a1;
console.log(o1);

/*Array to Array*/
var a1 = [1,2,3],
    a2 = [];
[a2[2],a2[1],a2[0]] = a1;
console.log(a2);

/*Swap Two Variables*/
var x = 10 , y = 20;
[y,x] = [x,y];
console.log(x,y);