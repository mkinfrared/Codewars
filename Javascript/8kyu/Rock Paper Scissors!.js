// https://www.codewars.com/kata/rock-paper-scissors/train/javascript

const rps = (p1, p2) => {
	if (p1 === p2) {
		return 'Draw!';
	}

	const plr1 = 'Player 1 won!';
	const plr2 = 'Player 2 won!';

	switch (p1) {
		case 'scissors':
			if (p2 === 'rock') {
				return plr2;
			}
			return plr1;

		case 'paper':
			if (p2 === 'scissors') {
				return plr2;
			}
			return plr1;
		case 'rock':
			if (p2 === 'paper') {
				return plr2;
			}
			return plr1;
	}
};