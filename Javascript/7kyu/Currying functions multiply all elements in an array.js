// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript?collection=functional-programming-3

function multiplyAll(arr) {
	return function (num) {
		return arr.map((digit) => digit * num);
	}
}