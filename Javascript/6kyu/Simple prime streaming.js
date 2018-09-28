// http://www.codewars.com/kata/simple-prime-streaming/train/javascript

function solve(a, b) {
	let arr = [];

	primes: for (let i = 2; arr.length < 20001; i++) {
		for (let j = 2; j < Math.sqrt(i) + 1; j++) {
			if (i % j === 0 && i !== 2) {
				continue primes;
			}
		}
		arr.push(i);
	}

	return arr.join('').slice(a, (a + b));
}

console.log(solve(2, 2));