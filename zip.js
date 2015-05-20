//Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
var lodash = require('lodash');
var zip1 = lodash.zip(['fred', 'barney'], [30, 40], [true, false]);
console.log(zip1);
// → [['fred', 30, true], ['barney', 40, false]]
