// https://www.codewars.com/kata/count-all-the-sheep-on-farm-in-the-heights-of-new-zealand/train/javascript

function lostSheep(friday, saturday, total) {
	return total - (friday.reduce((acc, cv) => acc + cv, 0) + saturday.reduce((acc, cv) => acc + cv, 0));
}

console.log(lostSheep([1, 2], [3, 4], 15));