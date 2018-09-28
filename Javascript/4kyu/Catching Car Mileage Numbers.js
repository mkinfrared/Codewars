// https://www.codewars.com/kata/catching-car-mileage-numbers/train/javascript

let test = [1337, 256];

console.log(isInteresting(109, test));

function isInteresting(number, awesomePhrases) {
	let arr = [checkForZeros(number),
			   checkIfSame(number),
			   checkIfAscending(number),
			   checkIfDescending(number),
			   checkForPalindrome(number),
			   checkForAwesome(number, awesomePhrases)];

	return arr.sort((a, b) => b > a).shift();
}

function checkForZeros(number) {
	if (number < 98) {
		return 0;
	}

	let arr = [number, number + 1, number + 2];

	arr = arr.map((num, i) => {
		if (new String(num).split('').slice(1).every((digit) => digit == 0)) {
			switch (i) {
				case 0:
					return 2;
				case 1:
				case 2:
					return 1;
			}
		}
		return 0;
	}).sort((a, b) => b > a);

	return arr[0];
}

function checkIfSame(number) {
	if (new String(number).length < 3) {
		return 0;
	}

	let arr = [number, number + 1, number + 2];

	arr = arr.map((num, i) => {
		if (new String(num).split('').every((digit, index, arr) => digit == arr[0])) {
			switch (i) {
				case 0:
					return 2;
				case 1:
				case 2:
					return 1;
			}
			return 0;
		}
	}).sort((a, b) => b > a);

	return arr[0];
}

function checkIfAscending(number) {
	if (new String(number).length < 3) {
		return 0;
	}

	let arr = [number, number + 1, number + 2];

	arr = arr.map((num, i) => {
		let str = new String(num).split('');
		let result = null;

		for (let j = 0; j < str.length - 1; j++) {
			if ((+str[j] + 1) % 10 == str[j + 1] % 10) {
				result = true;
			} else {
				result = false;
				break;
			}
		}

		if (result) {
			switch (i) {
				case 0:
					return 2;
				case 1:
				case 2:
					return 1;
			}
		}

		return 0;
	}).sort((a, b) => b > a);

	return arr[0];
}

function checkIfDescending(number) {
	if (number < 110) {
		return 0;
	}

	let arr = [number, number + 1, number + 2];

	arr = arr.map((num, i) => {
		let str = new String(num).split('');
		let result = null;

		for (let j = 0; j < str.length - 1; j++) {
			if (str[j] % 10 == (+str[j + 1] + 1) % 10) {
				result = true;
			} else {
				result = false;
				break;
			}
		}

		if (result) {
			switch (i) {
				case 0:
					return 2;
				case 1:
				case 2:
					return 1;
			}
		}

		return 0;
	}).sort((a, b) => b > a);

	return arr[0];

}

function checkForPalindrome(number) {
	if (new String(number).length < 3) {
		return 0;
	}

	let arr = [number, number + 1, number + 2];

	arr = arr.map((num, i) => {
		if (new String(num) == new String(num).split('').reverse().join('')) {
			console.log(i);
			switch (i) {
				case 0:
					return 2;
				case 2:
				case 1:
					return 1;
			}
		}
		return 0;
	}).sort((a, b) => b - a);

	return arr[0];
}

function checkForAwesome(number, array) {
	let arr = [number, number + 1, number + 2];

	arr = arr.map((num, i) => {
		if (array.includes(num)) {
			switch (i) {
				case 0:
					return 2;
				case 1:
				case 2:
					return 1;
			}
		}
		return 0;
	}).sort((a, b) => b > a);

	return arr[0];
}

