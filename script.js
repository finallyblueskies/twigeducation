/**
 * @function
 * @summary Groups elements of array by arrays of size arrLength
 * 
 * @param {Array} arr An array to be segmented
 * @param {Number} arrLength Max length of nested arrays
 * @returns {Array[]}
 */
const groupArrayElements = (arr, arrLength) => {
	const newArr = [];
	let groupArr = [];

	if (isNaN(arrLength) || typeof arrLength !== "number" || arrLength < 0) {
		throw new TypeError("groupArrayElements - arrLength is not a number 0+");
	}

	if (arrLength === 0) {
		return arr;
	}
	
	arr.forEach((el, i) => {
		groupArr.push(el);
		if (groupArr.length === arrLength || i === arr.length - 1) {
			newArr.push(groupArr);
			groupArr = [];
		}
	})

	return newArr;
}

module.exports = groupArrayElements;