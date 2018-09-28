// https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle/train/javascript

function perimeter(n) {
	function fib(num) {
		if (num === 1) {
			return 1;
		}
		return num + fib(num - 1);
	}

	return 4 * fib(n);
}

console.log(perimeter(8));