/// CHALLENGE 1  : ADD ALL NUMBERS
/// RETURN A SUM OF ALL PARAMETERS ENTERED REGARDLES OF THE AMOUNT OF NUMBERS
/// NO ARRAYS .... EXAMPLE  addAll(2, 5, 6, 7) === 20

/// solution 1 using ES5 arguments object (an array like object) and for loop

// function addAll() {
// 	var args = Array.prototype.slice.call(arguments);
// 	var sum = 0;
// 	for (let i = 0; i < args.length; i++) {
// 		sum += args[i];
// 	}
// 	return sum;
// }

// console.log(addAll(2, 5, 5, 6, 7));
//////////////

//// solution 2
///  using  ...rest and forEach loop.
// function addAll(...numbers) {
// 	let sum = 0;
// 	numbers.forEach((num) => (sum += num));
// 	return sum;
// }

// console.log(addAll(2, 5, 5, 6, 7));

/////////////
// solution 3  using ...rest and reduce

// function addAll(...numbers) {
// 	return numbers.reduce((sum, num) => sum + num);
// }
// console.log(addAll(2, 5, 5, 6, 7));

//////////////////////////////////////////////

/// CHALLENGE 2 SUM ALL PRIMES
// pass in a number to loop up to and add all the prime numbers.
// A prime number is a whole number greater than 1 whoes only factors are 1 and itself.
/// EX   sumAllPrime(10) == 17

// function sumAllPrime(num) {
// 	let sum = 0;

// 	function checkForPrime(i) {
// 		for (let x = 2; x < i; x++) {
// 			if (i % x === 0) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}

// 	for (let i = 2; i <= num; i++) {
// 		if (checkForPrime(i)) {
// 			sum += i;
// 		}
// 	}
// 	return sum;
// }

// console.log(sumAllPrime(10));

///////////////////////////////////////

//// CHALLENGE 3 : SEEK AND DESTROY

//// remove from the array whatever is in the following arguments.
/// and return left over values in an array.
/// ex  seekAnddestroy([2, 3, 4, 6, 6, 'hello'],2,6)  == [3, 4, 'hello']

/// solution 1  ; using   arguments, indexOf, filter

// function seekAnddestroy(arr) {
// 	const args = Array.from(arguments);

// 	function filterArr(arr) {
// 		// return true if NOT in array
// 		return args.indexOf(arr) === -1;
// 	}
// 	return arr.filter(filterArr);
// }

// console.log(seekAnddestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

//// solution 2  using  ...rest, filter and include.

// function seekAnddestroy(arr, ...rest) {
// 	return arr.filter((val) => !rest.includes(val));
// }

// console.log(seekAnddestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

////////////////////////////////////////////////

/// CHALLENGE 4 : SORT BY HIGHT
/// some people are standing in a row in a park. there are trees between them which
/// can not be moved. your task is to rearange the people by their height in a non
///descending order without moving the trees.
/// EX. a = [-1, 150, 190, 170, -1, -1, 180, 190]
// sortByHight(a) == [-1, 150, 160, 170, -1, -1, 180, 190];

/// solution 1

function sortByHight(a) {
	const arr1 = [];
	const arr2 = [];

	a.forEach((val, index) => {
		if (val === -1) {
			arr1.push(index);
		} else {
			arr2.push(val);
		}
	});
	// console.log(arr1, arr2);
	/// to sort from lowest to highest  (preveus - next) ... or highest to lowest (next - preveus)

	const sortArr = arr2.sort((prev, next) => prev - next);
	// console.log(sortArr);

	arr1.forEach((val, index) => sortArr.splice(arr1[index], 0, -1));
	return sortArr;
}

const a = [-1, 150, 160, 170, -1, -1, 180, 190];
console.log(sortByHight(a));
