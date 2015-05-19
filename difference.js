//creates an array excluding all values of the provided arrays using SameValueZero for equality comparisons.
var lodash = require('lodash');
var diff = lodash.difference([1,2,3],[4,2]);
console.log(diff);
