// https://www.codewars.com/kata/simple-fun-number-270-evil-code-medal/train/javascript

function evilCodeMedal(userTime, gold, silver, bronze) {
	userTime = userTime.split(':').reduce(reduceToSeconds, 0);
	gold     = gold.split(':').reduce(reduceToSeconds, 0);
	silver   = silver.split(':').reduce(reduceToSeconds, 0);
	bronze   = bronze.split(':').reduce(reduceToSeconds, 0);

	if (userTime < gold) {
		return 'Gold';
	} else if (userTime < silver) {
		return 'Silver';
	} else if (userTime < bronze) {
		return 'Bronze';
	} else {
		return 'None';
	}
}

function reduceToSeconds(acc, cv, i, arr) {
	switch (i) {
		case 0:
			return acc += +cv * 60 * 60;
		case 1:
			return acc += +cv * 60;
		case 2:
			return acc += +cv;
	}
}

console.log(evilCodeMedal("00:30:00", "00:15:00", "00:45:00", "01:15:00"));