// Array Search
// Given an array of strings like below,
// write a function that returns an array
// containing only those strings that match
// a passed-in search string, regardless of case.
//
// Example:
// var testArr = [
//   'iPhone 7',
//   'iPad Pro',
//   'Mac Book Pro',
//   'iMac',
//   'IpHONE 6s',
//   'iphone 3g',
//   'iPod Nano',
//   'iPhOnE SE'
// ];
//
// findString(testArr, 'iPhone');
//
// Should return
// [
//   'iPhone 7',
//   'IpHONE 6s',
//   'iphone 3g',
//   'iPhOnE SE'
// ]

const findString = (arr, str) => {
	str=str.toLowerCase()
	arr = arr.filter(el=>{
		el = el.toLowerCase()
		return el.includes(str)
	})
	return arr
}