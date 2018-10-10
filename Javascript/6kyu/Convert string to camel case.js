// http://www.codewars.com/kata/convert-string-to-camel-case?utm_source=newsletter

function toCamelCase(str) {
	let result = [];

	if (/-/.test(str)) {
		result = str.split('-');
	} else if (/_/.test(str)) {
		result = str.split('_');
	}

	return result.map((word, i) => {
		if (i === 0 && /[a-z]/.test(word.charAt(0))) {
			return word;
		}
		return word.charAt(0).toUpperCase() + word.slice(1);
	}).join('');
}

console.log(toCamelCase('asdf-safd'))