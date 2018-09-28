// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript?collection=8-kyu-2

function findMultiples(integer, limit) {
	let result = [];
	let sum = integer;
	while (sum <= limit) {
		result.push(sum);
		sum += integer;
	}
	return result;
}

console.log(findMultiples(11, 54));