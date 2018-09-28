// http://www.codewars.com/kata/ip-address-finder-code-golf/train/javascript

f = (inp) => {
	console.log([...inp])
	inp.split('')
	   .map((l, i, a) => a.reduce((acc, cv) => acc + cv.charCodeAt(0), 0) * (i + 1) % 256)
	   .splice(0, 4);
}

console.log(f('www.codewars.com'));