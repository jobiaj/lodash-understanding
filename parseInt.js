//Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used unless value is a hexadecimal, in which case a radix of 16 is used.

var _ = require('lodash');
console.log(_.parseInt('08'));
// → 8

console.log(_.map(['6', '08', '10'], _.parseInt));
// → [6, 8, 10]
