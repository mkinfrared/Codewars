// http://www.codewars.com/kata/bouncing-balls/train/javascript

function bouncingBall(h, bounce, window) {
	if (h <= 0 || 1 < bounce || bounce < 0 || window >= h) {
		return -1;
	}
	let count = 1;
	while (h >= window) {
		h = h * bounce;
		if (h >= window) {
			count++;
			count++;
		}
	}
	return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5));