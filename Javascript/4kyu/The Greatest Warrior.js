// https://www.codewars.com/kata/the-greatest-warrior/train/javascript

const ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

class Warrior {
	constructor() {
		this.warriorExperience  = 100;
		this.warriorLevel       = Math.floor(this.warriorExperience / 100);
		this.warriorAchievments = [];
	}

	level() {
		return this.warriorLevel;
	};

	experience() {
		return this.warriorExperience;
	}

	rank() {
		return ranks[Math.floor(this.warriorLevel / 10)];
	};

	achievements() {
		return this.warriorAchievments;
	}

	training(array) {
		if (this.warriorLevel < array[2]) {
			return `Not strong enough`;
		}

		this.increaseExperience(array[1]);
		this.warriorAchievments.push(array[0]);

		return array[0];
	}

	increaseExperience(exp) {
		if (this.warriorExperience + exp > 10000) {
			this.warriorExperience = 10000;
			this.warriorLevel      = Math.floor(this.warriorExperience / 100);
		} else {
			this.warriorExperience += exp;
			this.warriorLevel = Math.floor(this.warriorExperience / 100);
		}
	}

	battle(level) {
		const warriorRank = Math.floor(this.warriorLevel / 10);
		const enemyRank   = Math.floor(level / 10);

		if (level <= 0 || level > 100) {
			return `Invalid level`;
		}

		if (enemyRank - warriorRank >= 1 && level - this.warriorLevel >= 5) {
			return `You've been defeated`;
		}

		if (this.warriorLevel === level) {
			this.increaseExperience(10);
			return `A good fight`;
		}

		if (this.warriorLevel - level === 1) {
			this.increaseExperience(5);
			return `A good fight`;
		}

		if (this.warriorLevel - level > 1) {
			return `Easy fight`;
		}

		if (level - this.warriorLevel > 0) {
			const diff = level - this.warriorLevel;

			this.increaseExperience(20 * diff * diff);

			return `An intense fight`;
		}
	}
}

const bruceLee = new Warrior();

console.log(bruceLee.level());
console.log(bruceLee.rank());
console.log(bruceLee.achievements());
console.log(bruceLee.training(["Defeated Chuck Norris", 9000, 1]));
console.log(bruceLee.experience());
console.log(bruceLee.level());
console.log(bruceLee.rank());
console.log(bruceLee.achievements());
console.log(bruceLee.battle(90));
console.log(bruceLee.experience());

Goku = new Warrior()
console.log(Goku.level())
console.log(Goku.rank())
console.log(Goku.achievements())
console.log(Goku.training(["Do ten push-ups", 95, 1]))
console.log(Goku.level())
console.log(Goku.experience());
console.log(Goku.battle(0))
console.log(Goku.level())
console.log(Goku.battle(1))
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.achievements())
console.log(Goku.rank())
console.log(Goku.battle(3))
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.training(["Survive one night at the Forest of Death", 170, 2]))
console.log(Goku.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(Goku.achievements())
console.log(Goku.battle(2))
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.battle(9))
console.log(Goku.battle(14))
console.log(Goku.level())
console.log(Goku.battle(12))
console.log(Goku.battle(8))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.battle(140))
console.log(Goku.training(["Mastered the Spirit Bomb", 1580, 10]))
console.log(Goku.level())
console.log(Goku.rank())
console.log(Goku.battle(30))
console.log(Goku.rank())
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.training(["Mastered the Shadow Clone Jutsu", 19, 6]))
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.battle(32))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.battle(39))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.training(["Defeat Superman", 10000, 100]))
console.log(Goku.training(["Mastered the Spirit Gun", 1340, 43]))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.level())
console.log(Goku.battle(61))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.training(["Mastered the Perfect Roundhouse Kick", 1781, 60]))
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.battle(83))
console.log(Goku.level())
console.log(Goku.rank())
console.log(Goku.experience())
console.log(Goku.training(["Defeat The Four Horsemen", 1100, 82]))
console.log(Goku.battle(100))
console.log(Goku.rank())
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.training(["Win the Intergalaxtic Tournament", 679, 91]))
console.log(Goku.experience())
console.log(Goku.training(["Fight Superman to a draw", 11000, 99]))
console.log(Goku.level())
console.log(Goku.experience())
console.log(Goku.rank())
console.log(Goku.training(["Defeat Superman", 10000, 100]))
console.log(Goku.achievements())