function reverseLetter(str) {
	let abc = 'abcdefghijklmnopqrstuvwxyz';
	return str.split('').filter((l) => abc.includes(l)).reverse().join('');
}

console.log(reverseLetter('hello'));