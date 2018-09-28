// https://www.codewars.com/kata/ball-upwards/train/javascript

function maxBall(v0) {
	let v60    = v0 * 60 * 60;
	let h      = 0;
	let t      = 0;
	let result = [];
	const g    = 9.81;

	while (h >= 0) {
		h = (v60 * t) - (0.5 * g * t * t);
		result.push(h);
		t++;
	}

	console.log(result);
}

console.log(maxBall(15));