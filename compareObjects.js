// Compare Objects
// Write a function that compares two objects for equality.
// It should return true if the object are true, and false otherwise.
// Example:
// const obj1 = { one: "one", two: 2, three: false }
// const obj2 = { three: false, one: "one", two: 2 }
// areObjsEqual(obj1, obj2) should return true

const areObjsEqual = (obj1, obj2) => {
	return JSON.stringify(obj1)===JSON.stringify(obj1)? true: false
}
