/**
 * Created by JCLG on 3/16/2016.
 */

'use strict';

/* Pre-ES6 Way */
var name = "Kyle";
var greeting = "Hello " + name + "!";

console.log(greeting);
console.log(typeof greeting);

/* ES6 way */
var name = "Kyle";
var greeting = `Hello ${name}!`;

console.log(greeting);
console.log(typeof greeting);