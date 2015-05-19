//Returns the matched element, else undefined.
var lodash = require('lodash');
var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
console.log(lodash.find(users, function(chr) {
  return chr.age < 40;
}))
