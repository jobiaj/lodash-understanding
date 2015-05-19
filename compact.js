//create an array with all falsey values removed
var lodash = require('lodash');

var r = lodash.compact([0,1,false,2,'',3]);
console.log(r);

