// https://www.codewars.com/kata/roman-numerals-helper/train/javascript

let RomanNumerals = {
	toRoman: (number) => {
		let result = '';

		number = '' + number;
		number.split('').reverse().forEach((digit, i, arr) => {
			if (!digit) {
				return;
			}
			switch (i) {
				case 0:
					
			}
		})
	}
};