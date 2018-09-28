// http://www.codewars.com/kata/form-the-minimum/train/javascript

function minValue(values) {
	return +values.filter((digit, i, arr) => !arr.includes(digit, i + 1)).sort((a, b) => a - b).join('');
}

console.log(minValue([1, 5, 7, 1]));