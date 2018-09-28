// https://www.codewars.com/kata/which-are-in/train/javascript

function inArray(array1, array2) {
	return array1.filter((substr) => {
		for (let i = 0; i < array2.length; i++) {
			if (array2[i].includes(substr)) {
				return true;
			}
		}
		return false;
	}).sort();
}

let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));