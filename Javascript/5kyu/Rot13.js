// https://www.codewars.com/kata/rot13-1/train/javascript

function rot13(message) {
	let A = 'A'.charCodeAt(0),
		Z = 'Z'.charCodeAt(0),
		a = 'a'.charCodeAt(0),
		z = 'z'.charCodeAt(0);

	return message.split('').map((letter) => {
		let letCode = letter.charCodeAt(0);
		if (letCode >= A && letCode <= Z) {
			if (letCode + 13 > Z) {
				return String.fromCharCode((letCode + 13 - Z) + A - 1);
			}
			return String.fromCharCode(letCode + 13);
		} else if (letCode >= a && letCode <= z) {
			if (letCode + 13 > z) {
				return String.fromCharCode((letCode + 13 - z) + a - 1);
			}
			return String.fromCharCode(letCode + 13);
		} else {
			return letter;
		}
	}).join('');
}

let test = 'Test';
console.log(rot13(test));