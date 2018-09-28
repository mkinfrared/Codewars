// https://www.codewars.com/kata/coding-meetup-number-5-higher-order-functions-series-prepare-the-count-of-languages/train/javascript

function countLanguages(list) {
	let obj = {};
	list.forEach((elem) => {
		if (!obj[elem.language]) {
			obj[elem.language] = 1;
		} else {
			obj[elem.language]++;
		}
	});
	return obj;
}