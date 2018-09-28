// http://www.codewars.com/kata/backwards-read-primes/train/javascript

function backwardsPrime(start, stop) {
	let arr = [];
	for (let i = start; i < stop + 1; i++) {
		if (i > 9) {
			arr.push(i);
		}
	}

	arr = arr.filter((num) => {
		let sqrtnum = Math.floor(Math.sqrt(num));
		for (let i = 2; i < sqrtnum + 1; i++) {
			if (num % i === 0) {
				return null;
			}
		}
		return num;
	}).filter((num) => {
		let reversedNum = +(num + '').split('').reverse().join('');
		return num !== reversedNum;
	}).filter((num) => {
		let reversedNum = +(num + '').split('').reverse().join('');
		let sqReversed = Math.floor(Math.sqrt(reversedNum));
		for (let i = 2; i < sqReversed + 1; i++) {
			if (reversedNum % i === 0) {
				return null;
			}
		}
		return num;
	});
	return arr;
}

console.log(backwardsPrime(2, 100));
