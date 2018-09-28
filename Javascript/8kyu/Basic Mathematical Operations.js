// https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

function basicOp(operation, value1, value2) {
	let o = {
		'+': () => value1 + value2,
		'-': () => value1 - value2,
		'*': () => value1 * value2,
		'/': () => value1 / value2
	};

	return o[operation]();
}

console.log(basicOp('+', 3, 4));