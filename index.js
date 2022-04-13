/// CHALLENGE 1  : ADD ALL NUMBERS
/// RETURN A SUM OF ALL PARAMETERS ENTERED REGARDLES OF THE AMOUNT OF NUMBERS
/// NO ARRAYS .... EXAMPLE  addAll(2, 5, 6, 7) === 20

/// solution 1 using ES5 arguments object (an array like object) and for loop

// function addAll() {
// 	var args = Array.prototype.slice.call(arguments);
// 	var sum = 0;
// 	for (i = 0; i < args.length; i++) {
// 		sum += args[i];
// 	}
// 	return sum;
// }

// console.log(addAll(2, 5, 5, 6, 7));
//////////////

//// solution 2
///  using  ...rest and forEach loop.
function addAll(...numbers) {
	let sum = 0;
	numbers.forEach((num) => (sum += num));
	return sum;
}

console.log(addAll(2, 5, 5, 6, 7));
