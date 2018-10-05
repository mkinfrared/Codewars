// https://www.codewars.com/kata/cumulative-triangle/train/javascript

function cumulativeTriangle(n) {
	let i   = 1;
	let row = 1;

	let result = {};

	while (row <= n) {
		result[row] = [];
		for (let j = 0; j < row; j++) {
			if (row === n) {
				result[row].push(i);
			}
			i++;
		}
		row++;
	}

	return result[n].reduce((acc, cv) => acc + cv);
}

console.log(cumulativeTriangle(9999));