// https://www.codewars.com/kata/are-they-the-same/train/javascript

function comp(array1, array2) {
	if (!array1 || !array2) {
		return false;
	}
	array1.sort((a, b) => a - b);
	return array2.map((elem) => Math.sqrt(elem)).sort((a, b) => a - b).every((elem, i) => elem === array1[i]);
}


// return (!array1||!array2) ? false : array2.every((elem) => array1.includes(Math.sqrt(elem)));
