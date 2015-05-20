var lodash = require('lodash');

console.log(lodash.filter([4,5,6], function(n) {
	return n % 2 == 0;
}));
