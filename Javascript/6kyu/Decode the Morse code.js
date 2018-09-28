// http://www.codewars.com/kata/decode-the-morse-code/train/javascript

decodeMorse = function (morseCode) {
	let result = [];
	morseCode.split('   ')
			 .forEach((word, i, arr) => {
				 let words = [];
				 word.split(' ')
					 .forEach((letter, i, a) => {
						 words.push(MORSE_CODE[letter]);
					 });
				 let string = words.join('');
				 result.push(string);
			 });
	return result.join(' ').trim();
};


let string = '.... . -.--   .--- ..- -.. .';

decodeMorse(string);