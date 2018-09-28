// https://www.codewars.com/kata/gap-in-primes/train/javascript

function gap(g, m, n) {
	let arr    = [],
		output = [],
		result = [];

	for (let i = 0; i < n; i++) {
		arr.push(true);
	}

	for (let i = 2; i < Math.sqrt(n); i++) {
		if (arr[i]) {
			for (let j = i * i; j < n; j += i) {
				arr[j] = false;
			}
		}
	}
	for (let i = m; i < n; i++) {
		if (arr[i]) {
			output.push(i);
		}
	}

	for (let i = 0; i < output.length; i++) {
		if (result.length === 2) {
			break;
		}
		if (output[i + 1] - output[i] === g) {
			result.push(output[i], output[i + 1])
		}
	}
	return (result.length > 1) ? result : null;
}

console.log(gap(2, 100, 110));