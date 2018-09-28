// https://www.codewars.com/kata/salesmans-travel/train/javascript

function travel(r, zipcode) {
	r = r.split(',')
		 .filter((address) => address.includes(zipcode))
		 .map((address) => address.replace(zipcode, ''));

	return `${zipcode}:${r.join(',').replace(/\d+\s+/g, '').trim()}/${r.join(',').replace(/[A-z]+|\./g, '').trim()}`;
}