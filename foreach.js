//Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg and invoked with three arguments:
(value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false. 
var lodash = require('lodash');
lodash([1,2]).forEach(function(n){
	console.log(n);
}).value();
//this will give 
//1
//2

lodash.forEach({'a':1, 'b': 2}, function(n, key) {
	console.log(n, key);
});
