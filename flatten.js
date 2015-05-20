//Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it is only flattened a single level.
var _ = require('lodash');
var withoutdeep = _.flatten([1, [2, 3, [4]]]);
console.log(withoutdeep);
var withisdeep = _.flatten([1, [2, 3, [4]]], true);
console.log(withisdeep);


