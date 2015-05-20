var lodash = require('lodash');
console.log(lodash.min([1,2,3,4,5,2,2,4,0]));

console.log(lodash.max([4, 2, 8, 6]));
// → 8

console.log(lodash.max([]));
// → -Infinity

var users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

console.log(lodash.max(users, function(chr) {
  return chr.age;
}));
// → { 'user': 'fred', 'age': 40 }

// using the `_.property` callback shorthand
console.log(lodash.max(users, 'age'));
// → { 'user': 'fred', 'age': 40 }
