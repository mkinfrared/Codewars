// https://www.codewars.com/kata/square-n-sum/train/javascript

function squareSum(numbers){
	return numbers.map((num) => num * num).reduce((pv, cv) => pv + cv, 0);
}