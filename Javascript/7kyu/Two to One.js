// https://www.codewars.com/kata/two-to-one/train/javascript

function longest(s1, s2) {
  return s1.concat(s2)
           .split('')
           .filter((elem, i, arr) => !arr.includes(elem, i + 1))
           .sort()
           .join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
