// http://www.codewars.com/kata/decode-the-morse-code-advanced/train/javascript

var decodeBits = function (bits) {
	// ToDo: Accept 0's and 1's, return dots, dashes and spaces
	bits = bits.replace(/00000000000000/g, '*')
			   .replace(/111111|111/g, '-')
			   .replace(/000000|000/g, ' ')
			   .replace(/11|1/g, '.')
			   .replace(/00|0/g, '');

	let arr = bits.trim().split('*').map((elem) => elem.split(' '));

	return arr;
};

var decodeMorse = function (morseCode) {
	// ToDo: Accept dots, dashes and spaces, return human-readable message
	let result = '';
	morseCode.forEach((word) => {
		word.forEach((letter) => {
			result += MORSE_CODE[letter];
		});
		result += ' ';
	});

	return result.trim();
};

let string = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';
let str = '000000011100000';

decodeMorse(decodeBits(str));