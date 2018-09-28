// https://www.codewars.com/kata/twice-as-old

function twiceAsOld(dadYearsOld, sonYearsOld) {
	if (2 * sonYearsOld === dadYearsOld) {
		return 0;
	} else if (2 * sonYearsOld < dadYearsOld) {
		for (let i = 1; i < 2 * dadYearsOld; i++) {
			if (2 * (sonYearsOld + i) === dadYearsOld + i) {
				return i;
			}
		}
	} else {
		for (let i = sonYearsOld; i > 0; i--) {
			if (2 * (sonYearsOld - i) === dadYearsOld - i) {
				return i;
			}
		}
	}
}

console.log(twiceAsOld(29, 0));