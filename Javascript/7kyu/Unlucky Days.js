// https://www.codewars.com/kata/unlucky-days/train/javascript

function unluckyDays(year) {
	let result = 0,
		arr    = [];

	for (let i = 0; i < 12; i++) {
		arr.push(new Date(year, i, 13));
	}

	return arr.filter((elem) => elem.getDay() === 5).length;
}

console.log(unluckyDays(2011));