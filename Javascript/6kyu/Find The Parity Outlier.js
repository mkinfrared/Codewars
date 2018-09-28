// http://www.codewars.com/kata/find-the-parity-outlier/train/javascript

function findOutlier(integers) {
	let result1 = integers.filter((e) => e % 2 === 0);
	let result2 = integers.filter((e) => e % 2 !== 0);

	if (result1.length === 1) {
		return result1[0];
	} else {
		return result2[0];
	}
}