// https://www.codewars.com/kata/distributing-candies-fairly/train/javascript

function distribute(m, n) {

  if (m <= 0 && n <= 0) {
    return []
  } else if (m <= 0) {
    return new Array(n).fill(0)
  } else if (n <= 0) {
    return []
  }

  const result = new Array(n).fill(0)

  while (m > 0) {
    result.forEach((elem, i, arr) => {
      if (m <= 0) {
        return
      }
      m--
      arr[i]++
    })
  }

  return result
}

console.log(distribute(6, -5))
