// https://www.codewars.com/kata/the-hashtag-generator/train/javascript

function generateHashtag(str) {
	if (str === '') {
		return false;
	}

	str = str.trim()
			 .split(' ')
			 .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase());
	str.unshift('#');
	str = str.join('');

	if (str === '#' || str.length > 140) {
		return false;
	}

	return str;
}

console.log(generateHashtag('    '));
let test = '';
console.log(test);