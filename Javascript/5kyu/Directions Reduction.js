// https://www.codewars.com/kata/directions-reduction/train/javascript

function dirReduc(arr) {
	let o = {
		NORTH: 'SOUTH',
		SOUTH: 'NORTH',
		EAST : 'WEST',
		WEST : 'EAST'
	};

	for (let i = 0; i < arr.length; i++) {
		let opposite = o[arr[i]];

		if (arr[i + 1] === opposite) {
			arr.splice(i, 1);
			arr.splice(arr.indexOf(opposite, i), 1);
			i = -1;
		}
	}

	return arr;
}

let test = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
let test2 = ["NORTH", "WEST", "SOUTH", "EAST"];
let test3 = ['EAST',
			 'EAST',
			 'WEST',
			 'NORTH',
			 'WEST',
			 'EAST',
			 'EAST',
			 'SOUTH',
			 'NORTH',
			 'WEST'];

console.log(dirReduc(test3));