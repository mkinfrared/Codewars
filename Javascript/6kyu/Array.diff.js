// https://www.codewars.com/kata/array-dot-diff/train/javascript

function array_diff(a, b) {
  return a.filter((elem) => !b.includes(elem))
}

console.log(array_diff([3, 4], [3]))
