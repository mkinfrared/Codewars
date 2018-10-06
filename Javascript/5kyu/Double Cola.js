// https://www.codewars.com/kata/double-cola/train/javascript

function whoIsNext(names, r) {
	let i = 0;

	while (i < r) {
		let name = names[0];

		names = names.slice(1);

		names.push(name);
		names.push(name);

		i++;
	}
	return names[0];
}

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

console.log(whoIsNext(names, 100000000));