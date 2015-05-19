//If an object is provided for iteratee the created _.matches style callback returns true for elements that have the properties of the given object, else false.
var lodash = require('lodash');
function timesThree(n) {
	return n * 3;
}

var ary = lodash.map([1,2], timesThree);
console.log(ary);

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// using the `_.property` callback shorthand
var user = lodash.map(users, 'user');
console.log(user)
// → ['barney', 'fred']
