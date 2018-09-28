// http://www.codewars.com/kata/discover-the-original-price/train/javascript

function discoverOriginalPrice(discountedPrice, salePercentage) {
	let originalPrice = (discountedPrice * 100 / (100 - salePercentage)).toFixed(2);
	return (originalPrice % 1 === 0) ? parseInt(originalPrice) : parseFloat(originalPrice);
}

console.log(discoverOriginalPrice('425', 25));