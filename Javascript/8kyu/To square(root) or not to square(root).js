// https://www.codewars.com/kata/to-square-root-or-not-to-square-root/train/javascript

function squareOrSquareRoot(array) {
	return array.map((num) => {
		return (Math.sqrt(num) % 1 === 0) ? Math.sqrt(num) : num * num;
	});
}