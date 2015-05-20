//Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end. If end is not specified it is set to start with start then set to 0. If end is less than start a zero-length range is created unless a negative step is specified.
var lodash = require('lodash');
var x = lodash.range(4);
console.log(x);
var y = lodash.range(1,5);
console.log(y);
var z = lodash.range(0,20,5);
console.log(z);
var a = lodash.range(0,-4,-1);
console.log(a);
var b = lodash.range(1,4,0);
console.log(b);



