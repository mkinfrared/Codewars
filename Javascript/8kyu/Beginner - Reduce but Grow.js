// https://www.codewars.com/kata/beginner-reduce-but-grow

function grow(x) {
	return x.sort((a, b) => a > b).reduce((acc, cv) => acc * cv);
}

console.log(grow([4, 1, 1, 1, 4]));