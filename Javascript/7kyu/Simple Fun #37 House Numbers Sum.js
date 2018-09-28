// https://www.codewars.com/kata/simple-fun-number-37-house-numbers-sum/train/javascript

function houseNumbersSum(inputArray) {
	let result = 0;

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] === 0) {
			break;
		}
		result += inputArray[i];
	}

	return result;
}