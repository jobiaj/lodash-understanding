//Creates a slice of array with n elements dropped from the end.
var lodash = require('lodash');
lodash.dropRight([1, 2, 3]);
// → [1, 2]

lodash.dropRight([1, 2, 3], 2);
// → [1]

lodash.dropRight([1, 2, 3], 5);
// → []

lodash.dropRight([1, 2, 3], 0);
// → [1, 2, 3]
