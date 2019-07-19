// Given an array of numbers,
// write a function that returns the sum of those numbers.
//
// Example:
// var testArr = [0, 1, 2, 3, 4];
//
// sumArray(testArr); Should return 10


const sumArray = (arr) => {
	return (arr.reduce((acc, curr) => acc + curr))
}
