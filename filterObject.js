// Filter Object
// Given the below object, return the same object with only the editable fields

// {
// 	name: {
// 		editable: true,
// 		value: 'Jack',
// 		type: 'text'
// 	},
// 	phone: {
// 		editable: true,
// 		value: 8675309,
// 		type: 'number'
// 	},
// 	id: {
// 		editable: false,
// 		value: 'JHA-252',
// 		type: 'text'
// 	}
// }

const filterObject = (obj) => {
	for(var item in obj){
		if(obj[item].editable === false){
			delete obj[item]
		}
	}
	return obj
}