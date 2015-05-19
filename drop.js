//Creates a slice of array with n elements dropped from the beginning.
var lodash = require('lodash');
lodash.drop([1, 2, 3]);
// → [2, 3]

lodash.drop([1, 2, 3], 2);
// → [3]

lodash.drop([1, 2, 3], 5);
// → []

lodash.drop([1, 2, 3], 0);
// → [1, 2, 3]
