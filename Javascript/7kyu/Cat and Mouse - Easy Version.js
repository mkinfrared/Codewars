// https://www.codewars.com/kata/cat-and-mouse-easy-version/train/javascript

function catMouse(x) {
	if (/C\.{0,3}m/.test(x)) {
		return 'Caught!';
	}
	return 'Escaped!';
}

console.log(catMouse('C....m'));