// http://www.codewars.com/kata/help-the-bookseller/train/javascript

function stockList(listOfArt, listOfCat) {
	let result = {};

	listOfCat.forEach((elem) => {
		listOfArt.forEach((cat) => {
			let quantity = cat.split(' ');
			if (new RegExp().test(cat)) {
				if (!result[elem]) {
					result[elem] = +quantity[1];
				} else {
					result[elem] += +quantity[1];
				}
			}
		})
	});

	let str = '';

	for (const resultKey in result) {
		str += `(${resultKey} : ${result[resultKey]}) - `;
	}

	return str.replace(/ - $/g, '');
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"];

console.log(stockList(b, c));