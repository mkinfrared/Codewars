// https://www.codewars.com/kata/palindrome-strings/train/javascript

function isPalindrome(line) {
	line = new String(line).toLowerCase().split('');
	for (let i = 0; i < line.length / 2; i++) {
		if (line[i] !== line[line.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome(12321));