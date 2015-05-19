//returns accumulated value

var lodash = require("lodash");
lodash.reduce([1,2], function(total, n) {
	return total+n;
});
// gives 3

lodash.reduce({'a': 1, 'b': 2}, function(result, n, key) {
	result[key] = n * 3;
	return result;
}, {});
// gives {'a': 3, 'b':6}
