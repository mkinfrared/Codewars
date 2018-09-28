// https://www.codewars.com/kata/geometry-basics-distance-between-points-in-2d/train/javascript

function distanceBetweenPoints(a, b) {
	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}