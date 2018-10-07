// https://www.codewars.com/kata/human-readable-duration-format

function formatDuration(seconds) {
	
	if (!seconds) {
		return 'now';
	}
	
	let result = '';
	const time = {
		year  : 0,
		day   : 0,
		hour  : 0,
		minute: 0,
		second: 0
	};

	time.second = seconds % 60;
	time.minute = Math.floor((seconds / 60) % 60);
	time.hour   = Math.floor((seconds / 3600) % 24);
	time.day    = Math.floor((seconds / 86400) % 365);
	time.year   = Math.floor((seconds / 31536000));

	Object.entries(time)
					.filter((unit) => unit[1] !== 0)
					.map((unit) => {
						if (+unit[1] > 1) {
							return `${unit[1]} ${unit[0]}s`
						}
						return `${unit[1]} ${unit[0]}`;
					})
					.forEach((unit, ind, arr) => {
						if (arr.length > 1 && ind === arr.length - 1) {
							result += ` and ${unit}`
						} else if (arr.length === 1 || arr.length > 1 && ind === arr.length - 2) {
							result += unit
						} else {
							result += `${unit}, `;
						}
					});

	return result;

}

console.log(60 * 60 * 24);
console.log(15731080 / 86400);
console.log(formatDuration(15731080));