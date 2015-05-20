var _ = require('lodash');
console.log(_.groupBy([4.2, 6.1, 6.4], function(n) {
  return Math.floor(n);
}));
// → { '4': [4.2], '6': [6.1, 6.4] }

console.log(_.groupBy([4.2, 6.1, 6.4], function(n) {
  return this.floor(n);
}, Math));
// → { '4': [4.2], '6': [6.1, 6.4] }

// using the `_.property` callback shorthand
console.log(_.groupBy(['one', 'two', 'three' , 'four'], 'length'));
// → { '3': ['one', 'two'], '5': ['three'] }
