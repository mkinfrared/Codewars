// https://www.codewars.com/kata/invert-values/train/javascript

function invert(array) {
	return array.map((num) => {
		if (num === 0) {
			return 0;
		}
		return num * -1;
	});
}

console.log(invert([0]));