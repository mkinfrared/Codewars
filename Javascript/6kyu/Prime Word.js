// https://www.codewars.com/kata/prime-word

function primeWord(arr) {
	let result = [];
	arr.forEach((array) => {
		let str = array[0].split('').map((letter) => letter.charCodeAt(0)).some((num) => {
			console.log((num + array[1]))
			for (let i = 2; i < Math.sqrt(num) + 1; i++) {
				if ((num + array[1]) % i === 0) {
					return false;
				}
			}
			return true;
		});
		if (str) {
			result.push(1);
		} else {
			result.push(0);
		}
	});
	return result;
}

let test = [["Ava", 51], ["William", 79]];

console.log(primeWord(test));