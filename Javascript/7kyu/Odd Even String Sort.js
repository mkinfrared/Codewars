// https://www.codewars.com/kata/odd-even-string-sort

function sortMyString(S) {
	const even = S.split('').filter((e, i) => i % 2 === 0);
	const odd  = S.split('').filter((e, i) => i % 2 !== 0);

	let result = even.join('') + ' ' + odd.join('');

	return result;
}

console.log(sortMyString('Code wars'));