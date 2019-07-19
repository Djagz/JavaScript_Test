// Array Modifying
// Given an array of strings like below,
// write a function that returns an array
// of objects with a specific property and value structure.
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
// arrayTransform(testArr);
//
// Should return
// [
//   {
//     label: 'iPhone 7',
//     name: 'iphone7',
//     index: 0
//   },
//   {
//     label: 'iPad Pro',
//     name: 'ipadpro',
//     index: 1
//   },
//   {
//     label: 'Mac Book Pro',
//     name: 'macbookpro',
//     index: 2
//   },
//   ...
// ]


const arrayTransform = (arr) => {

	arr = arr.map((el,i) => {
		let objectOfEachElement = {}
		objectOfEachElement.label = el
		el = el.replace(/\s/g, '')
		el = el.toLowerCase()
		objectOfEachElement.name = el
		objectOfEachElement.index = i
		return objectOfEachElement
	})

	return arr
}


