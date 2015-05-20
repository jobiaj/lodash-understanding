//Fills elements of array with value from start up to, but not including, end. 
var lodash = require('lodash');
var array = [1,2,3];

lodash.fill(array,'a');
console.log(array);

console.log(lodash.fill(Array(3), 2));

console.log(lodash.fill([4,6,6], 5,1,2));


