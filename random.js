//Produces a random number between min and max (inclusive). If only one argument is provided a number between 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point number is returned instead of an integer.

var lodash = require('lodash');
console.log(lodash.random(0,5)) //produce a random integr bw 0-5
console.log(lodash.random(5, true)); //a floating-point number between 0 and 5
console.log(lodash.random(1.2, 5,2)); //a floating-point number between 1.2 and 5.2

