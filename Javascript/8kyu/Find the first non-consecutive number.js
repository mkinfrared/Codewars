// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
	let sequence = {
		min: 1,
		max: null
	};
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] > sequence.min) {
			sequence.max = arr[i] - arr[i - 1];
		}
	}
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] - arr[i - 1] === sequence.max) {
			return arr[i];
		}
	}
	return null;
}