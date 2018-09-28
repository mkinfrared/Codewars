// https://www.codewars.com/kata/ninety-nine-thousand-nine-hundred-ninety-nine/train/javascript

const numberToEnglish = n => {
	if (n < 0 || n > 99999 || n % 1 !== 0) {
		return '';
	}
	if (n === 0) {
		return 'zero';
	}

	let result = [];

	String(n).split('').reverse().forEach((elem, i, arr) => {
		if (i === 0 && parseInt(arr[1]) !== 1) {
			switch (parseInt(elem)) {
				case 1:
					result.push('one');
					break;
				case 2:
					result.push('two');
					break;
				case 3:
					result.push('three');
					break;
				case 4:
					result.push('four');
					break;
				case 5:
					result.push('five');
					break;
				case 6:
					result.push('six');
					break;
				case 7:
					result.push('seven');
					break;
				case 8:
					result.push('eight');
					break;
				case 9:
					result.push('nine');
					break;
			}
		}
		if (i === 0 && parseInt(arr[1]) === 1) {
			switch (parseInt(elem)) {
				case 1:
					result.push('eleven');
					break;
				case 2:
					result.push('twelve');
					break;
				case 3:
					result.push('thirteen');
					break;
				case 4:
					result.push('fourteen');
					break;
				case 5:
					result.push('fifteen');
					break;
				case 6:
					result.push('sixteen');
					break;
				case 7:
					result.push('seventeen');
					break;
				case 8:
					result.push('eighteen');
					break;
				case 9:
					result.push('nineteen');
					break;
				case 0:
					result.push('ten');
					break;
			}
		}
		if (i === 1) {
			switch (parseInt(elem)) {
				case 2:
					result.push('twenty');
					break;
				case 3:
					result.push('thirty');
					break;
				case 4:
					result.push('forty');
					break;
				case 5:
					result.push('fifty');
					break;
				case 6:
					result.push('sixty');
					break;
				case 7:
					result.push('seventy');
					break;
				case 8:
					result.push('eighty');
					break;
				case 9:
					result.push('ninety');
					break;
			}
		}
		if (i === 2) {
			switch (parseInt(elem)) {
				case 1:
					result.push('one hundred');
					break;
				case 2:
					result.push('two hundred');
					break;
				case 3:
					result.push('three hundred');
					break;
				case 4:
					result.push('four hundred');
					break;
				case 5:
					result.push('five hundred');
					break;
				case 6:
					result.push('six hundred');
					break;
				case 7:
					result.push('seven hundred');
					break;
				case 8:
					result.push('eight hundred');
					break;
				case 9:
					result.push('nine hundred');
					break;
			}
		}
		if (i === 3) {
			result.push('thousand');
		}
		if (i === 3 && parseInt(arr[4]) !== 1) {
			switch (parseInt(elem)) {
				case 1:
					result.push('one');
					break;
				case 2:
					result.push('two');
					break;
				case 3:
					result.push('three');
					break;
				case 4:
					result.push('four');
					break;
				case 5:
					result.push('five');
					break;
				case 6:
					result.push('six');
					break;
				case 7:
					result.push('seven');
					break;
				case 8:
					result.push('eight');
					break;
				case 9:
					result.push('nine');
					break;
			}
		}
		if (i === 3 && parseInt(arr[4]) === 1) {
			switch (parseInt(elem)) {
				case 1:
					result.push('eleven');
					break;
				case 2:
					result.push('twelve');
					break;
				case 3:
					result.push('thirteen');
					break;
				case 4:
					result.push('fourteen');
					break;
				case 5:
					result.push('fifteen');
					break;
				case 6:
					result.push('sixteen');
					break;
				case 7:
					result.push('seventeen');
					break;
				case 8:
					result.push('eighteen');
					break;
				case 9:
					result.push('nineteen');
					break;
				case 0:
					result.push('ten');
					break;
			}
		}
		if (i === 4) {
			switch (parseInt(elem)) {
				case 2:
					result.push('twenty');
					break;
				case 3:
					result.push('thirty');
					break;
				case 4:
					result.push('forty');
					break;
				case 5:
					result.push('fifty');
					break;
				case 6:
					result.push('sixty');
					break;
				case 7:
					result.push('seventy');
					break;
				case 8:
					result.push('eighty');
					break;
				case 9:
					result.push('ninety');
					break;
			}
		}
	});

	return result.reverse().join(' ');
};

console.log(numberToEnglish(4002));