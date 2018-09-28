// https://www.codewars.com/kata/buying-a-car/train/javascript

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
	let months  = 0,
		savings = 0,
		result  = [];

	while ((startPriceOld + savings) < startPriceNew) {
		startPriceOld *= 1 - (percentLossByMonth / 100);
		startPriceNew *= 1 - (percentLossByMonth / 100);
		if (months % 2 === 0) {
			percentLossByMonth += 0.5;
		}
		savings += savingperMonth;
		months++;
	}
	result.push(months, Math.round((startPriceOld + savings) - startPriceNew));
	return result;
}

console.log(nbMonths(2000, 8000, 1000, 1.5));