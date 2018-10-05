// https://www.codewars.com/kata/ranking-poker-hands/train/javascript

var Result = {"win": 1, "loss": 2, "tie": 3}

function PokerHand(hand) {
	const cardValues = {
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'T': 10,
		'J': 11,
		'Q': 12,
		'K': 13,
		'A': 14
	};

	this.result = 1;
	this.suits  = {};
	this.values = {};

	hand.split(' ').forEach((card) => {
		if (this.suits[card.charAt(1)]) {
			this.suits[card.charAt(1)] += 1;
		} else {
			this.suits[card.charAt(1)] = 1;
		}
		if (this.values[cardValues[card.charAt(0)]]) {
			this.values[cardValues[card.charAt(0)]] += 1;
		} else {
			this.values[cardValues[card.charAt(0)]] = 1;
		}
	});

	const flush = Object.values(this.suits).includes(5);

	const street = Object.keys(this.values).sort((a, b) => a - b).every((value, i, arr) => {
		if (arr.length !== 5) {
			return false;
		}

		if (i + 1 === arr.length) {
			return true;
		}

		return arr[i + 1] - value === 1;
	});

	const royal = Object.keys(this.values).includes('14');

	const four = Object.values(this.values).includes(4);

	const fullHouse = Object.values(this.values).sort((a, b) => a - b).every((value, index) => {
		let arr = [2, 3];

		return value === arr[index];
	});

	const set = Object.values(this.values).includes(3);

	const twoPairs = Object.values(this.values).sort((a, b) => a - b).every((value, index) => {
		let arr = [1, 2, 2];

		return value === arr[index];
	});

	const pair = Object.values(this.values).includes(2);

	if (flush) {
		if (street && royal) {
			this.result = 10
		} else if (street) {
			this.result = 9
		} else {
			this.result = 6
		}
	} else if (four) {
		this.result = 8
	} else if (fullHouse) {
		this.result = 7
	} else if (street) {
		this.result = 5
	} else if (set) {
		this.result = 4
	} else if (twoPairs) {
		this.result = 3
	} else if (pair) {
		this.result = 2
	}

}

PokerHand.prototype.compareWith = function (hand) {
	if (this.result > hand.result) {
		return Result.win;
	}

	if (this.result < hand.result) {
		return Result.loss;
	}

	if (this.result === hand.result) {

		let playerValues = Object.entries(this.values).sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1]);
		let dealerValues = Object.entries(hand.values).sort((a, b) => b[0] - a[0]).sort((a, b) => b[1] - a[1]);

		for (let i = 0; i < playerValues.length; i++) {
			if (+playerValues[i][0] > +dealerValues[i][0]) {
				return Result.win;
			} else if (+playerValues[i][0] < +dealerValues[i][0]) {
				return Result.loss;
			}
		}

		return Result.tie;
	}

};

let playerHand = new PokerHand('5H 5S 5H 2H 2H');
let dealerHand = new PokerHand('6D 6S 6D 7H 7D');
console.log(dealerHand.result);

console.log(playerHand.compareWith(dealerHand));